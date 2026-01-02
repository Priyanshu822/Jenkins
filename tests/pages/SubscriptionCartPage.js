const {expect} = require('@playwright/test')

class SubscriptionCartPage {
  constructor(page) {
    this.page = page;

    this.cartButton = 'a[href="/view_cart"]';
    this.subscriptionText = 'h2:text("Subscription")';
    this.emailInput = '#susbscribe_email';
    this.subscribeButton = '#subscribe';
    this.successMessage = 'div#success-subscribe';
  }

  async clickCart() {
    await this.page.click(this.cartButton);
  }

  async scrollToFooter() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async enterEmail(email) {
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.subscribeButton);
  }
}

module.exports =  SubscriptionCartPage ;
