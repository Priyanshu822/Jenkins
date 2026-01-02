class ProductQuantityPage {
  constructor(page) {
    this.page = page;

    this.firstViewProduct = 'a[href^="/product_details"] >> nth=0';
    this.quantityInput = '#quantity';
    this.addToCartBtn = 'button:has-text("Add to cart")';
    this.viewCartBtn = 'a:has-text("View Cart")';
    this.cartQuantity = '.cart_quantity button';
  }

  async clickViewProduct() {
    await this.page.click(this.firstViewProduct);
  }

  async setQuantity(quantity) {
    await this.page.fill(this.quantityInput, quantity);
  }

  async addToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async viewCart() {
    await this.page.click(this.viewCartBtn);
  }
}

module.exports = ProductQuantityPage ;
