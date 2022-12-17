import { newTag } from "./create-element";

class Header {
  constructor() {
    this.header = newTag("header", { className: "header" });
    this.headerWrapper = newTag("div", {
      className: "header-wrapper",
    });
    this.logo = newTag("div", {
      className: "logo",
    });
    this.cartButton = newTag("div", {
      className: "cart-button",
    });
    this.cartCounter = newTag("div", {
      className: "cart__counter",
      textContent: 0,
    });
  }
  render() {
    this.header.append(this.headerWrapper);
    this.headerWrapper.append(this.logo, this.cartButton);
    this.cartButton.append(this.cartCounter);

    return this.header;
  }
}

export { Header };
