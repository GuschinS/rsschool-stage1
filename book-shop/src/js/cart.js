import json from "../books.json";

import { arrayCart } from "./pop-up";

const cartLink = document.querySelector(".cart");
const counter = document.querySelector(".counter");
let count = 0;
let storage = [];

const changedCounter = () => {
  if (localStorage.getItem("count")) {
    count = localStorage.getItem("count");
  }
  counter.textContent = count;
};
changedCounter();

const createCart = () => {
  const container = document.querySelector(".container");
  const popUpBackground = document.querySelector(".pop-up-background");
  if (container) {
    container.remove();
  }
  if (popUpBackground) {
    popUpBackground.remove();
  }
  storage = localStorage.getItem("arrayCart");
  const main = document.querySelector("main");
  const mineTitle = document.querySelector(".mine__title");
  mineTitle.textContent = "This is cart";
  const selectedId = document.createElement("span");
  selectedId.textContent = storage;
  const buttonResetCart = document.createElement("button");
  buttonResetCart.classList.add("button-reset-cart");
  buttonResetCart.textContent = "Reset";
  main.append(selectedId);
  main.append(buttonResetCart);

  // let bookInCart = json.filter((x) => x.price === 22).map((x) => x);

  const buttonResetCartDiv = document.querySelector(".button-reset-cart");

  buttonResetCartDiv.addEventListener("click", resetsCart);
};
cartLink.addEventListener("click", createCart);

const resetsCart = () => {
  count = 0;
  storage = [];
  localStorage.setItem("count", count);
  localStorage.setItem("arrayCart", arrayCart);
  changedCounter();
};
