import { newTag } from "./create-element";
import { Counter } from "./counter";
import { ButtonRemove } from "./button-delete";

class CartCard {
  constructor({ id, author, title, price, imageLink, count }) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.price = price;
    this.imageLink = imageLink;
    this.count = count;

    this.cardContainer = newTag("li", { className: "bin-card-wrapper" });
    this.cardContainer.setAttribute("data-id", `${this.id}`);
    this.card = newTag("div", { className: "bin-card" });
    this.imgWrapper = newTag("div", { className: "bin-card__img" });
    this.img = newTag("img", {
      src: this.imageLink,
      width: 50,
      alt: this.title,
    });
    this.cardBody = newTag("div", { className: "card-body" });
    this.cardAuthor = newTag("p", {
      className: "item-author",
      innerText: this.author,
    });
    this.cardTitle = newTag("p", {
      className: "item-title",
      innerText: this.title,
    });
    this.detailsWrapper = newTag("div", { className: "details-wrapper" });
    this.counter = new Counter(this.count).render();
    this.priceWrapper = newTag("div", { className: "price-wrapper" });
    this.priceText = newTag("span", { innerText: " $" });
    this.price = newTag("span", { className: "price", innerText: this.price });
    this.btnRemove = new ButtonRemove("delete").render();
  }
  renderCard() {
    this.cardContainer.append(this.card);
    this.cardContainer.append(this.detailsWrapper);
    this.card.append(this.imgWrapper);
    this.card.append(this.cardBody);
    this.imgWrapper.append(this.img);
    this.cardBody.append(this.cardAuthor);
    this.cardBody.append(this.cardTitle);
    this.cardBody.append(this.priceWrapper);
    this.detailsWrapper.append(this.counter);
    this.detailsWrapper.append(this.btnRemove);
    this.priceWrapper.append(this.price);
    this.priceWrapper.append(this.priceText);

    return this.cardContainer;
  }
}

export { CartCard };
