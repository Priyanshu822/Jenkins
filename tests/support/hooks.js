// tests/support/hooks.js
const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000); // increase step timeout if needed

let browsers = {};
let browserOrder = ['chromium', 'edge', 'firefox', 'webkit'];
let browserIndex = 0;

// Launch all browsers once
BeforeAll(async () => {
  browsers = {
    chromium: await chromium.launch({ headless: false }),
    firefox: await firefox.launch({ headless: false }),
    webkit: await webkit.launch({ headless: false }),
    // Edge via chromium channel
    edge: await chromium.launch({ headless: false, channel: 'msedge' }),
  };
});

// Before each scenario — rotate browser
Before(async function () {
  const browserName = browserOrder[browserIndex];
  const selectedBrowser = browsers[browserName];

  this.context = await selectedBrowser.newContext();
  this.page = await this.context.newPage();

  // advance rotation
  browserIndex = (browserIndex + 1) % browserOrder.length;
});

// After each scenario — take screenshot on failure and attach
After(async function ({ result, pickle }) {
  try {
    // ensure screenshots dir exists
    const screenshotsDir = path.join(process.cwd(), 'screenshots');
    if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

    // tolerant failure check
    const status = (result && result.status) ? String(result.status).toLowerCase() : '';
    if (status === 'failed') {
      // screenshot as Buffer
      const buffer = await this.page.screenshot({ fullPage: true });
      const fileName = `${pickle ? pickle.name.replace(/[^a-zA-Z0-9_\-]/g, '_') : 'scenario'}_${Date.now()}.png`;
      const filePath = path.join(screenshotsDir, fileName);

      // write file for debugging
      fs.writeFileSync(filePath, buffer);

      // attach buffer to cucumber report
      await this.attach(buffer, 'image/png');

      console.log(`Screenshot saved: ${filePath}`);
    }
  } catch (err) {
    console.error('Error while capturing screenshot:', err);
  } finally {
    // cleanup regardless
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
  }
});

// Close browsers at the end of run
AfterAll(async () => {
  for (const b of Object.values(browsers)) {
    try { await b.close(); } catch (e) {}
  }
});
