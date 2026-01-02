const { test, expect } = require('@playwright/test');

test.use({ headless: false });

test('Check Sorting', async ({ page }) => {

  // 1. Open app
  await page.goto('https://e2e.getro.dev/app/shared-lists/demo-shared-list');

  // 2. Wait for AG Grid
  await page.waitForSelector('.ag-root');

  // 3. Scroll HEADER horizontally (important)
  await page.evaluate(() => {
    const headerScroll =
      document.querySelector('.ag-header-viewport');
    headerScroll.scrollLeft = headerScroll.scrollWidth;
  });

  // 4. Locate header by col-id (best practice)
  const yearHeader = page.locator(
    '.ag-header-cell[col-id="yearsOfExperience"]'
  );

  // 5. Hover to make menu visible
  await yearHeader.hover();

  // 6. Click menu (3 dots)
  await yearHeader.locator('button[aria-label="Menu"]').click();

  // 7. Sort Ascending
  await page.locator('text=Sort ascending').click();

  // 8. Open menu again
  await yearHeader.hover();
  await yearHeader.locator('button[aria-label="Menu"]').click();

  // 9. Sort Descending
  await page.locator('text=Sort descending').click();
});
