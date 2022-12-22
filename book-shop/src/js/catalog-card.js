import { newTag } from "./create-element";
import { Counter } from "./counter";
import { Modal } from "./modal";
import { toggleBinStatus } from "./bin-status";
import { CartCard } from "./cart-card";
import { increaseTotalPrice } from "./total-price";

class CatalogCard {
  constructor({ author, title, price, description, imageLink }, index) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageLink = imageLink;

    this.cardContainer = newTag("li", {
      className: "book",
      draggable: "true",
    });
    this.cardContainer.setAttribute("data-id", `${index + 1}`);
    this.card = newTag("div", { className: "card" });
    // img
    this.cardImg = newTag("img", {
      className: "card__img",
      src: this.imageLink,
      width: 300,
      alt: this.title,
    });
    // card body
    this.cardBody = newTag("div", { className: "card-body" });
    this.cardAuthor = newTag("p", {
      className: "item-author",
      innerText: this.author,
    });
    this.cardTitle = newTag("h3", {
      className: "item-title",
      innerText: this.title,
    });
    // btn open modal
    this.btnOpenModal = newTag("button", {
      className: "btn-link",
      innerHTML: "Show more",
    });

    // details
    this.detailsWrapper = newTag("div", { className: "details-wrapper" });
    // counter
    this.counter = new Counter().render();
    // price
    this.priceWrapper = newTag("div", { className: "price-wrapper" });
    this.priceText = newTag("span", { innerText: " $" });
    this.price = newTag("span", { className: "price", innerText: this.price });
    // button add to cart
    this.btnBin = newTag("button", {
      className: "btn",
      innerHTML: "Add to cart",
    });

    this.listenEvents();
  }
  renderCard() {
    this.cardContainer.append(this.card);
    this.card.append(this.cardImg);
    this.card.append(this.cardBody);
    this.cardBody.append(this.cardAuthor);
    this.cardBody.append(this.cardTitle);
    this.cardBody.append(this.btnOpenModal);
    this.cardBody.append(this.detailsWrapper);
    this.cardBody.append(this.btnBin);
    this.detailsWrapper.append(this.counter);
    this.detailsWrapper.append(this.priceWrapper);
    this.priceWrapper.append(this.price);
    this.priceWrapper.append(this.priceText);

    return this.cardContainer;
  }
  listenEvents() {
    this.cardContainer.addEventListener("dragend", (event) =>
      this.addToBin(event)
    );
    this.btnOpenModal.addEventListener("click", () =>
      this.openModal(this.imageLink, this.author, this.title, this.description)
    );
    this.btnBin.addEventListener("click", (event) => {
      this.addToBin(event);
      this.setToLocalStorage();
    });
  }

  addToBin(event) {
    const card = event.target.closest(".book");
    const binWrapper = document.querySelector(".cart-lists");
    const productInfo = {
      id: card.dataset.id,
      author: card.querySelector(".item-author").innerText,
      title: card.querySelector(".item-title").innerText,
      price: card.querySelector(".price").innerText,
      imageLink: card.querySelector(".card__img").getAttribute("src"),
      count: card.querySelector(".count").innerText,
    };
    //change counter in cart
    const counterInCart = document.querySelector(".cart__counter");
    if (localStorage.getItem("counterInCart.textContent")) {
      counterInCart.textContent = localStorage.getItem(
        "counterInCart.textContent"
      );
    } else {
      counterInCart.textContent = 0;
    }
    counterInCart.textContent = +counterInCart.textContent + +productInfo.count;
    localStorage.setItem(
      "counterInCart.textContent",
      counterInCart.textContent
    );

    const itemInBin = binWrapper.querySelector(
      `[data-id = "${productInfo.id}"]`
    );

    if (itemInBin) {
      const counterElement = itemInBin.querySelector(".count");
      counterElement.innerText = +counterElement.innerText + +productInfo.count;
    } else {
      binWrapper.append(new CartCard(productInfo).renderCard());
    }

    increaseTotalPrice(productInfo.price * productInfo.count);
    //Bin status display
    toggleBinStatus();
    //reset the counter
    card.querySelector(".count").innerText = "1";
  }

  openModal(imageLink, author, title, description) {
    new Modal(imageLink, author, title, description).openModal();
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

    localStorage.setItem("storedProducts", JSON.stringify(arrayProducts));

    localStorage.setItem("totalPrice", totalPrice);
  }
}

export { CatalogCard };
