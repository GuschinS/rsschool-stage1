import json from '../data.json';
import { CatalogCard } from './catalog-card';
import { CategoriesBrands } from './category-brand-filters';

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
    let brands = [];
    let category = [];
    array.forEach((data, index) => {
        let card = new CatalogCard(data, index);
        console.log('card: ', card);
        brands.push(data.brand);
        category.push(data.category);
        fragment.append(card.renderCard());
    });
    brands = [...new Set(brands)];
    const filtersBrand = document.querySelector('.filters-brand-list');
    brands.forEach((item) => {
        let brand = new CategoriesBrands(item);
        console.log(item);
        filtersBrand.append(brand.renderCategoriesBrands());
    });
    category = [...new Set(category)];
    const filtersCategory = document.querySelector('.filters-category-list');
    brands.forEach((item) => {
        let category = new CategoriesBrands(item);
        filtersCategory.append(category.renderCategoriesBrands());
    })
    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);
    return cardsList;
}
