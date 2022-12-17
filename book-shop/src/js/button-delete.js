import { newTag } from "./create-element";
import cartImg from "../assets/svg/delete.svg";
import { decreaseTotalPrice, resetTotalPrice } from "./total-price";
import { toggleBinStatus } from "./bin-status";

class ButtonRemove {
  constructor(tooltip) {
    this.button = newTag("span", { className: "btn-remove" });
    this.img = newTag("img", {
      src: cartImg,
      width: "35",
      height: "35",
    });
    this.img.setAttribute("data-tooltip", tooltip);
    this.listenEvents();
  }
  render() {
    this.button.append(this.img);
    return this.button;
  }
  listenEvents() {
    this.button.addEventListener("click", (event) => {
      this.deleteCard(event);
    });
  }
  deleteCard(event) {
    const counterInCart = document.querySelector(".cart__counter");
    if (event.target.closest("#btn-remove-all")) {
      const list = document.querySelectorAll(".bin-card-wrapper");
      counterInCart.textContent = 0;
      for (let card of list) {
        card.remove();
        this.setToLocalStorage();
      }
      resetTotalPrice();
    } else {
      const card = event.target.closest(".bin-card-wrapper");
      const price = card.querySelector(".price").innerText;
      const count = card.querySelector(".count").innerText;
      console.log("count: ", count);
      decreaseTotalPrice(price * count);
      card.remove();
      counterInCart.textContent -= count;
      this.setToLocalStorage();
    }
    //Bin status display
    toggleBinStatus();
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

export { ButtonRemove };
