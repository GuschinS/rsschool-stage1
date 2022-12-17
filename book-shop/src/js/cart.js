import { newTag } from "./create-element";
import { ButtonRemove } from "./button-delete";

class Cart {
  constructor() {
    this.cart = newTag("section", { className: "cart-container none" });
    this.title = newTag("h2", { innerText: "Cart" });
    this.binWrapper = newTag("div", { className: "card" });
    this.binTitle = newTag("h4", { innerText: "Your order" });
    this.binAlert = newTag("div", {
      className: "alert alert-secondary",
      innerText: "Cart is empty",
    });
    this.binCardsList = newTag("ul", { className: "cart-lists" });
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    // Total price
    this.wrapper = newTag("div", { className: "sum" });
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    this.totalText = newTag("span", {
      className: "total__text",
      innerHTML: "Cart Subtotal:  ",
    });
    this.totalPrice = newTag("span", {
      className: "total__price",
      innerHTML: this.currentNotalPrice || 0,
    });
    this.totalDollars = newTag("span", {
      className: "total__dollar",
      innerHTML: " $",
    });
    // btn delete all
    this.btnRemove = new ButtonRemove("Clear all").render();
    this.btnRemove.setAttribute("id", "btn-remove-all");
    this.btnRemove.classList.add("none");

    // proceed to checkout
    this.binConfirmOrder = newTag("div", {
      className: "bin-confirm none",
    });
    this.btnConfirm = newTag("button", {
      className: "btn",
      innerHTML: "Proceed to checkout",
    });

    this.listenEvents();
  }
  render() {
    this.cart.append(this.title);
    this.cart.append(this.binWrapper);
    this.binWrapper.append(this.binTitle);
    this.binWrapper.append(this.binAlert);
    this.binWrapper.append(this.binCardsList);
    this.binWrapper.append(this.wrapper);

    this.wrapper.append(this.binTotalWrapper);
    this.wrapper.append(this.btnRemove);

    this.binTotalWrapper.append(this.totalText);
    this.binTotalWrapper.append(this.totalPrice);
    this.binTotalWrapper.append(this.totalDollars);
    this.binWrapper.append(this.binConfirmOrder);
    this.binConfirmOrder.append(this.btnConfirm);

    return this.cart;
  }
  listenEvents() {
    this.binWrapper.ondragover = (event) => event.preventDefault();
    this.btnConfirm.addEventListener("click", () => {
      this.setToLocalStorage();
      const cartContainer = document.querySelector(".cart-container");
      const catalogContainer = document.querySelector(".catalog-container");
      cartContainer.classList.add("none");
      catalogContainer.classList.add("none");
      const formWrapper = document.querySelector(".form-wrapper");
      formWrapper.classList.remove("none");
    });
  }

  getOrderList() {
    let orderList = [];
    const list = document.querySelectorAll(".bin-card-wrapper");
    for (let card of list) {
      const productInfo = {
        id: card.dataset.id,
        author: card.querySelector(".item-author").innerText,
        title: card.querySelector(".item-title").innerText,
        price: card.querySelector(".price").innerText,
        imageLink: card.querySelector("img").getAttribute("src"),
        count: card.querySelector(".count").innerText,
      };
      orderList.push(productInfo);
    }
    return orderList;
  }
  getTotalPrice() {
    return document.querySelector(".total__price").innerText;
  }
  setToLocalStorage() {
    const arrayProducts = this.getOrderList();
    const totalPrice = this.getTotalPrice();
    const counterInCart = document.querySelector(".cart__counter");

    localStorage.setItem("storedProducts", JSON.stringify(arrayProducts));
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem(
      "counterInCart.textContent",
      counterInCart.textContent
    );
  }
}

export { Cart };
