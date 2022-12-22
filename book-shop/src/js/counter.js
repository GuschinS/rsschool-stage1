import { newTag } from "./create-element";
import { increaseTotalPrice, decreaseTotalPrice } from "./total-price";

class Counter {
  constructor(count) {
    this.count = count;

    this.counterWrapper = newTag("div", { className: "counter-wrapper items" });
    this.counter = newTag("div", {
      className: "items__control count",
      innerText: this.count === undefined ? 1 : this.count,
    });
    this.btnMinus = newTag("div", {
      className: "items__control",
      innerText: "-",
    });
    this.btnPlus = newTag("div", {
      className: "items__control",
      innerText: "+",
    });

    this.listenEvents();
  }
  render() {
    this.counterWrapper.append(this.btnMinus);
    this.counterWrapper.append(this.counter);
    this.counterWrapper.append(this.btnPlus);

    return this.counterWrapper;
  }
  listenEvents() {
    this.btnPlus.addEventListener("click", (event) => this.increment(event));
    this.btnMinus.addEventListener("click", (event) => this.decrement(event));
  }
  increment(event) {
    const card = event.target.closest(".bin-card-wrapper");
    if (card) {
      const price = +card.querySelector(".price").innerText;
      increaseTotalPrice(price);
    }
    this.counter.innerText = ++this.counter.innerText;
  }
  decrement(event) {
    if (+this.counter.innerText > 1) {
      const card = event.target.closest(".bin-card-wrapper");
      if (card) {
        const price = +card.querySelector(".price").innerText;
        decreaseTotalPrice(price);
      }
      this.counter.innerText = --this.counter.innerText;
    }
  }
}

export { Counter };
