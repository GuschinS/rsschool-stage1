import { newTag } from './create-element';
import { Modal } from './modal';

class CatalogCard {
    constructor({ title, images, price, description }, index) {
        this.title = title;
        this.thumbnail = images[1];
        this.price = price;
        this.description = description;
        this.cardContainer = newTag('li', {
            className: 'product-card',
        });
        this.cardContainer.setAttribute('data-id', `${index + 1}`);
        this.card = newTag('div', { className: 'card' });
        // img
        this.cardImg = newTag('img', {
            className: 'card__img',
            src: this.thumbnail,
            width: 150,
            alt: this.title,
        });
        // card body
        this.cardBody = newTag('div', { className: 'card-body' });
        this.cardTitle = newTag('h3', {
            className: 'item-title',
            innerText: this.title,
        });
        // btn open modal
        this.btnOpenModal = newTag('button', {
            className: 'btn-link',
            innerHTML: 'Show more',
        });
        // price
        this.priceWrapper = newTag('div', { className: 'price-wrapper' });
        this.priceText = newTag('span', { innerText: ' $' });
        this.price = newTag('span', { className: 'price', innerText: this.price });
        // button add to cart
        this.btnBin = newTag('button', {
            className: 'btn',
            innerHTML: 'Add to cart',
        });
        this.listenEvents();
    }
    renderCard() {
        this.cardContainer.append(this.card);
        this.card.append(this.cardImg);
        this.card.append(this.cardBody);
        this.cardBody.append(this.cardTitle);
        this.cardBody.append(this.priceWrapper);
        this.priceWrapper.append(this.price);
        this.priceWrapper.append(this.priceText);
        this.cardBody.append(this.btnOpenModal);
        this.cardBody.append(this.btnBin);

        return this.cardContainer;
    }
    listenEvents() {
        this.btnOpenModal.addEventListener('click', () => {
            this.openModal(this.title, this.description, this.thumbnail);
        });
        this.btnBin.addEventListener('click', (event) => {
            console.log('text');
            // this.addToBin(event);
            // this.setToLocalStorage();
        });
    }
    openModal(title, description, thumbnail) {
        new Modal(title, description, thumbnail).openModal();
    }
}

export { CatalogCard };
