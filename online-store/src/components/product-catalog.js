import { newTag } from './create-element';

class ProductCatalog {
    constructor() {
        this.productCatalog = newTag('section', { className: 'catalog-container' });
        this.title = newTag('h2', {
            className: 'main__title',
            innerText: 'Catalog',
        });
        this.cardsList = newTag('ul', { className: 'cards__list' });
    }
    render() {
        this.productCatalog.append(this.title);
        this.productCatalog.append(this.cardsList);
        return this.productCatalog;
    }
}

export { ProductCatalog };
