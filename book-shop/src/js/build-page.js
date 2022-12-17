import { fragment, getBooks } from "./loader";
import { createdPopUp, selectedBook, closePopup, addedBook } from "./pop-up";
const body = document.querySelector("body");

const buildMain = () => {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.classList.add("mine__title");
  h1.textContent = "Book catalog";
  main.append(h1);
  body.append(main);
};
buildMain();

const buildContainer = () => {
  const container = document.querySelector(".container");
  if (!container) {
    const mineTitle = document.querySelector(".mine__title");
    mineTitle.textContent = "Book catalog";
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.classList.add("container");
    getBooks();
    container.append(fragment);
    main.append(container);
  }
  if (!popUpBackground) {
    createdPopUp();
    selectedBook();
  }
  const popupCloseButton = document.querySelector(".pop-up-close-button");
  popupCloseButton.addEventListener("click", closePopup);
  const popUpBackground = document.querySelector(".pop-up-background");
  popUpBackground.addEventListener("click", (e) => {
    if (e.target === popUpBackground) {
      closePopup();
    }
  });
  const cartButton = document.querySelector(".cart-button");
  cartButton.addEventListener("click", addedBook);
};

buildContainer();

const logo = document.querySelector(".logo");
logo.addEventListener("click", buildContainer);
