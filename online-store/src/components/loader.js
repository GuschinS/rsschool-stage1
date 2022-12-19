import json from '../data.json';
import { CatalogCard } from './catalog-card';

async function getCards() {
    try {
        renderProducts(json);
    } catch (error) {
        console.log(error);
    }
}
const app = document.querySelector('body');

if (app) {
    getCards();
}

function renderProducts(array) {
    console.log('array: ', array);
    let fragment = new DocumentFragment();
    array.forEach((data, index) => {
        let card = new CatalogCard(data, index);
        console.log('card: ', card);
        fragment.append(card.renderCard());
    });
    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);
    return cardsList;
}
