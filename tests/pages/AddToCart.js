class AddProductsToCartPage {
  constructor(page) {
    this.page = page;

    this.productsButton = 'a[href="/products"]';

    this.firstProduct = '.product-image-wrapper >> nth=0';
    this.secondProduct = '.product-image-wrapper >> nth=1';

    this.addToCartButton = '.overlay-content a:has-text("Add to cart")';
    this.continueShoppingBtn = 'button:has-text("Continue Shopping")';
    this.viewCartBtn = 'a:has-text("View Cart")';

    this.cartRows = 'tr.cart_product';
    this.price = '.cart_price';
    this.quantity = '.cart_quantity button';
    this.total = '.cart_total_price';
  }

  async clickProducts() {
    await this.page.click(this.productsButton);
  }

  async addFirstProduct() {
    await this.page.hover(this.firstProduct);
    await this.page.locator(this.firstProduct).locator(this.addToCartButton).click();
    await this.page.click(this.continueShoppingBtn);
  }

  async addSecondProduct() {
    await this.page.hover(this.secondProduct);
    await this.page.locator(this.secondProduct).locator(this.addToCartButton).click();
    await this.page.click(this.viewCartBtn);
  }
}

module.exports = AddProductsToCartPage;
