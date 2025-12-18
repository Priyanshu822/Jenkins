const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor(options = {}) {
    this.attach = options.attach || (async () => {}); // this is for screenshot attachment
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);
