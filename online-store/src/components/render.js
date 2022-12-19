// import { newTag } from './create-element';
import { Main } from './main';
import { Header } from './header';
// import { Overlay } from "./overlay";
// import { CartCard } from "./cart-card";
// import { toggleBinStatus } from "./bin-status";

// const app = newTag('div', { className: 'app' });
const app = document.querySelector('body');
if (app) {
    app.append(new Header().render());
    app.append(new Main().render());
}
// document.body.append(app);
// const cartContainer = document.querySelector('.cart-container');
// const catalogContainer = document.querySelector('.catalog-container');

// const cartEventListener = () => {
//     cartContainer.classList.remove('none');
//     catalogContainer.classList.add('none');
// };
// const cartButton = document.querySelector('.cart-button');
// cartButton.addEventListener('click', cartEventListener);

// const logoEventListener = () => {
//     cartContainer.classList.add('none');
//     catalogContainer.classList.remove('none');
// };
// const logo = document.querySelector('.logo');
// logo.addEventListener('click', logoEventListener);

// const counterInCart = document.querySelector('.cart__counter');
// if (localStorage.getItem('counterInCart.textContent')) {
//     counterInCart.textContent = localStorage.getItem('counterInCart.textContent');
// } else {
//     counterInCart.textContent = 0;
// }

// add products from local storage to cart
// const cartLists = document.querySelector('.cart-lists');

// function getFromLocalStorage() {
//     let products = [];
//     if (localStorage.getItem('storedProducts')) products = JSON.parse(localStorage.getItem('storedProducts'));

//     return products;
// }

// add cards to Cart
// if (app) {
//     getFromLocalStorage().forEach((productInfo) => {
//         cartLists.append(new CartCard(productInfo).renderCard());
//         toggleBinStatus();
//     });
// }
