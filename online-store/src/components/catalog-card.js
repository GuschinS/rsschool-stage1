import { newTag } from './create-element';

class CatalogCard {
    constructor({ id, title, thumbnail }, index) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.cardContainer = newTag('li', {
            className: 'product-card',
        });
        this.cardContainer.setAttribute('data-id', `${index + 1}`);
        this.card = newTag('div', { className: 'card' });
        // img
        this.cardImg = newTag('img', {
            className: 'card__img',
            src: this.thumbnail,
            width: 300,
            alt: this.title,
        });
        // card body
        this.cardBody = newTag('div', { className: 'card-body' });
        this.cardId = newTag('p', {
            className: 'item-author',
            innerText: this.id,
        });
        this.cardTitle = newTag('h3', {
            className: 'item-title',
            innerText: this.title,
        });
    }
    renderCard() {
        this.cardContainer.append(this.card);
        this.card.append(this.cardImg);
        this.card.append(this.cardBody);
        this.cardBody.append(this.cardId);
        this.cardBody.append(this.cardTitle);

        return this.cardContainer;
    }
}

export { CatalogCard };
