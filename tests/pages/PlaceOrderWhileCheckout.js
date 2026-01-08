const { expect } = require("@playwright/test");

class PlaceOrderPage {
  constructor(page) {
    this.page = page;

    // Home & Cart
    this.addToCartBtn = '(//a[contains(text(),"Add to cart")])[1]';
    this.cartBtn = 'a[href="/view_cart"]';
    this.proceedCheckoutBtn = 'text=Proceed To Checkout';

    // Register/Login
    this.registerLoginBtn = 'a[href="/login"]';
    this.signupName = 'input[data-qa="signup-name"]';
    this.signupEmail = 'input[data-qa="signup-email"]';
    this.signupBtn = 'button[data-qa="signup-button"]';

    // Account creation
    this.password = '#password';
    this.firstName = '#first_name';
    this.lastName = '#last_name';
    this.address = '#address1';
    this.state = '#state';
    this.city = '#city';
    this.zipcode = '#zipcode';
    this.mobile = '#mobile_number';
    this.createAccountBtn = 'button[data-qa="create-account"]';

    // Order
    this.commentBox = 'textarea[name="message"]';
    this.placeOrderBtn = 'a[href="/payment"]';

    // Payment
    this.nameOnCard = 'input[name="name_on_card"]';
    this.cardNumber = 'input[name="card_number"]';
    this.cvc = 'input[name="cvc"]';
    this.expiryMonth = 'input[name="expiry_month"]';
    this.expiryYear = 'input[name="expiry_year"]';
    this.payBtn = '#submit';
  }
  async openApp() {
    await this.page.goto("https://automationexercise.com");
  }

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async openCart() {
    await this.page.click(this.cartBtn);
  }

  async proceedToCheckout() {
    await this.page.click(this.proceedCheckoutBtn);
  }

  async signup() {
    await this.page.fill(this.signupName, 'TestUser');
    await this.page.fill(this.signupEmail, `test${Date.now()}@mail.com`);
    await this.page.click(this.signupBtn);
  }

  async fillAccountDetails() {
    await this.page.fill(this.password, 'Test@123');
    await this.page.fill(this.firstName, 'Test');
    await this.page.fill(this.lastName, 'User');
    await this.page.fill(this.address, 'Test Address');
    await this.page.fill(this.state, 'Delhi');
    await this.page.fill(this.city, 'Delhi');
    await this.page.fill(this.zipcode, '110001');
    await this.page.fill(this.mobile, '9999999999');
    await this.page.click(this.createAccountBtn);
  }

  async placeOrder() {
    await this.page.fill(this.commentBox, 'Please deliver fast');
    await this.page.click(this.placeOrderBtn);
  }

  async makePayment() {
    await this.page.fill(this.nameOnCard, 'Test User');
    await this.page.fill(this.cardNumber, '4111111111111111');
    await this.page.fill(this.cvc, '123');
    await this.page.fill(this.expiryMonth, '12');
    await this.page.fill(this.expiryYear, '2026');
    await this.page.click(this.payBtn);
  }
}

module.exports = PlaceOrderPage;
