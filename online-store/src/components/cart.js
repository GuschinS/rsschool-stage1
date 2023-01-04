import { newTag } from './create-element';
import json from '../data.json';

class Cart {
    constructor() {
        this.cartContainer = newTag('section', { className: 'cart__section' });
        this.productsCart = newTag('div', { className: 'products__container' });
        this.productsPage = newTag('div', { className: 'products-page' });
        this.productsList = newTag('div', { className: 'products-list' });
        this.productItem = newTag('div', { className: 'product-item' });

        this.productImg = newTag('div', { className: 'product-img' });
        this.productInfo = newTag('div', { className: 'product-info' });
        this.productName = newTag('div', { className: 'product-name' });
        this.productRating = newTag('div', { className: 'product-rating' });
        this.productDiscount = newTag('div', { className: 'product-discount' });

        this.productBuyInfo = newTag('div', { className: 'product-buy-info' });
        this.productStock = newTag('div', { className: 'product-stock' });
        this.productAdd = newTag('button', {
            className: 'product-add',
            textContent: '+',
        });
        this.productCount = newTag('h3', {
            className: 'product-count',
            textContent: '0',
        });
        this.productTakeAway = newTag('button', {
            className: 'product-take-away',
            textContent: '-',
        });
        this.productPrice = newTag('h4', {
            className: 'product-price',
            textContent: '$0',
        });

        this.summaryContainer = newTag('div', { className: 'summary__container' });
        this.summaryTitle = newTag('h3', {
            className: 'summary-title',
            textContent: 'Summary',
        });
        this.summaryProducts = newTag('h3', {
            className: 'summary-products',
            textContent: 'Products: 0',
        });
        this.summaryTotalPrice = newTag('h3', {
            className: 'summary-total',
            textContent: 'Total: $0',
        });
        this.summaryPromoCode = newTag('input', {
            id: 'summary-promo-code',
            type: 'text',
            size: '5',
        });
        this.summaryBuy = newTag('button', {
            id: 'summary-buy',
            textContent: 'BUY NOW',
        });
        this.orderButton = newTag('button', {
            id: 'order-button',
            textContent: 'ORDER',
        });
        this.cartListenEvents();
    }

    renderCart() {
        this.cartContainer.append(this.productsCart);
        this.cartContainer.append(this.summaryContainer);

        this.productsCart.append(this.productsPage);
        this.productsPage.append(this.productsList);

        this.summaryContainer.append(this.summaryTitle);
        this.summaryContainer.append(this.summaryProducts);
        this.summaryContainer.append(this.summaryTotalPrice);
        this.summaryContainer.append(this.summaryPromoCode);
        this.summaryContainer.append(this.summaryBuy);
        this.summaryContainer.append(this.orderButton);

        localStorage.clear();
        return this.cartContainer;
    }

    addsToCart(index) {
        const product = json[index - 1];
        if (localStorage.getItem(product.title) !== null) {
            const productNames = document.querySelectorAll('.product-name');
            const productCounts = document.querySelectorAll('.product-count');
            const productPrices = document.querySelectorAll('.product-price');
            let prdIndex = 0;
            for (let i = 0; i < productNames; i++) {
                if (productNames[i] === product.title) {
                    prdIndex = i;
                }
            }
            const currentProductCount = +productCounts[prdIndex].textContent;
            if (currentProductCount === product.stock) {
                alert('Out of stock');
                return;
            }
            productCounts[prdIndex].textContent = `${currentProductCount + 1}`;
            const currentProductPrice = +productPrices[prdIndex].textContent.replace(/\D/g, '');
            productPrices[prdIndex].textContent = `$${currentProductPrice + product.price}`;
            this.summaryUpdate();
            return;
        }
        const image = newTag('img', {
            className: 'product-image',
            src: `${product.images[1]}`,
        });
        this.productImg.append(image);
        this.productName.textContent = product.title;
        this.productRating.textContent = `Rating: ${product.rating}`;
        this.productDiscount.textContent = `Discount: ${product.discountPercentage}`;
        this.productStock = `Stock: ${product.stock}`;
        this.productCount.textContent = '1';
        this.productPrice.textContent = `$${product.price}`;

        localStorage.setItem(product.title, product.stock);
        const productList = document.querySelector('.products-list');

        productList.append(this.productItem);
        this.productItem.append(this.productImg);
        this.productItem.append(this.productInfo);
        this.productInfo.append(this.productName);
        this.productInfo.append(this.productRating);
        this.productInfo.append(this.productDiscount);
        this.productItem.append(this.productBuyInfo);
        this.productBuyInfo.append(this.productStock);
        this.productAdd.id = product.title;
        this.productBuyInfo.append(this.productAdd);
        this.productBuyInfo.append(this.productCount);
        this.productTakeAway.id = product.title;
        this.productBuyInfo.append(this.productTakeAway);
        this.productBuyInfo.append(this.productPrice);

        this.summaryUpdate();
    }

    cartHeaderUpdate(price, count) {
        const cartTotal = document.querySelector('.cart-total');
        cartTotal.textContent = `Cart total: ${price}$`;
        const cartCounter = document.querySelector('.cart__counter');
        cartCounter.textContent = count;
    }

    summaryUpdate() {
        const productPrice = document.querySelectorAll('.product-price');
        let productNumberPrice = [];
        for (let i = 0; i < productPrice.length; i++) {
            productNumberPrice.push(+productPrice[i].textContent.replace(/\D/g, ''));
        }
        productNumberPrice = [productNumberPrice.reduce((a, b) => a + b, 0)];
        const summaryTotal = document.querySelector('.summary-total');
        summaryTotal.textContent = `Total: $${productNumberPrice[0]}`;

        const productCount = document.querySelectorAll('.product-count');
        let productNumber = [];
        for (let i = 0; i < productCount.length; i++) {
            productNumber.push(+productCount[i].textContent);
        }
        productNumber = [productNumber.reduce((a, b) => a + b, 0)];
        const summaryCount = document.querySelector('.summary-products');
        summaryCount.textContent = `Products: ${productNumber[0]}`;

        this.cartHeaderUpdate(productNumberPrice[0], productNumber[0]);
    }

    cartListenEvents() {
        this.productAdd.addEventListener('click', (event) => {
            this.addingToCart(event.target.id);
            console.log(event);
        });
        this.productTakeAway.addEventListener('click', (event) => {
            this.takeAwayCart(event.target.id);
            console.log(event);
        });
        this.orderButton.addEventListener('click', () => {
            this.cartContainer.classList.remove('open');
            const orderForm = document.querySelector('.form__section');
            orderForm.classList.add('open');
        });
    }

    addingToCart(productName) {
        const count = +this.productCount.textContent;
        const checkLocal = localStorage.getItem(productName);
        if (count === +checkLocal) {
            alert('Out of stock');
            return;
        }
        const price = +this.productPrice.textContent.replace(/\D/g, '') / count;
        const sumPrice = +this.productPrice.textContent.replace(/\D/g, '');
        this.productCount.textContent = count + 1;
        this.productPrice.textContent = `$${price + sumPrice}`;
        this.summaryUpdate();
    }

    takeAwayCart(productName) {
        const count = +this.productCount.textContent;
        if (count === 1) {
            this.productItem.remove();
            localStorage.removeItem(productName);
            this.summaryUpdate();
            return;
        }
        const price = +this.productPrice.textContent.replace(/\D/g, '') / count;
        const sumPrice = +this.productPrice.textContent.replace(/\D/g, '');
        this.productCount.textContent = count - 1;
        this.productPrice.textContent = `$${sumPrice - price}`;
        this.summaryUpdate();
    }
}

export { Cart };
