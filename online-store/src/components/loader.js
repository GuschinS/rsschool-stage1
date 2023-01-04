// import json from '../data.json';
import { CatalogCard } from './catalog-card';
import { CategoriesBrands } from './category-brand-filters';
import { selectCategoryArray } from './select-filter';

async function getCards() {
    try {
        renderProducts(selectCategoryArray);
    } catch (error) {
        console.log(error);
    }
}
// const app = document.querySelector('body');

// if (app) {
getCards();
// }

function renderProducts(array) {
    let fragment = new DocumentFragment();
    let brands = [];
    let category = [];
    array.forEach((data, index) => {
        let card = new CatalogCard(data, index);
        brands.push(data.brand);
        category.push(data.category);
        fragment.append(card.renderCard());
    });
    category = [...new Set(category)];
    const filtersCategory = document.querySelector('.filters-category-list');
    category.forEach((item) => {
        let category = new CategoriesBrands(item);
        filtersCategory.append(category.renderCategoriesBrands());
    });
    brands = [...new Set(brands)];
    const filtersBrand = document.querySelector('.filters-brand-list');
    brands.forEach((item) => {
        let brand = new CategoriesBrands(item);
        filtersBrand.append(brand.renderCategoriesBrands());
    });

    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);
    return cardsList;
}
// export {selectCategoryArray};
