import json from "../books";
import { CatalogCard } from "./catalog-card";

async function getBooks() {
  try {
    renderProducts(json);
  } catch (error) {
    console.log(error);
  }
}
const app = document.querySelector(".app");

if (app) {
  getBooks();
}

function renderProducts(array) {
  let fragment = new DocumentFragment();
  array.forEach((data, index) => {
    let card = new CatalogCard(data, index);
    fragment.append(card.renderCard());
  });
  const cardsList = document.querySelector(".cards__list");
  cardsList.append(fragment);
  return cardsList;
}
