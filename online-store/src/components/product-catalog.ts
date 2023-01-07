import { newTag } from './create-element';

class ProductCatalog {
    productCatalog: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
        textContent?: string | number;
        type?: string;
        size?: string;
        src?: string;
        action?: string;
        innerHTML?: string;
        pattern?: string;
        required?: boolean;
        min?: string;
        name?: string;
        for?: string;
        checked?: boolean;
        width?: number;
        alt?: string;
    };
    title: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
        textContent?: string | number;
        type?: string;
        size?: string;
        src?: string;
        action?: string;
        innerHTML?: string;
        pattern?: string;
        required?: boolean;
        min?: string;
        name?: string;
        for?: string;
        checked?: boolean;
        width?: number;
        alt?: string;
    };
    cardsList: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
        textContent?: string | number;
        type?: string;
        size?: string;
        src?: string;
        action?: string;
        innerHTML?: string;
        pattern?: string;
        required?: boolean;
        min?: string;
        name?: string;
        for?: string;
        checked?: boolean;
        width?: number;
        alt?: string;
    };
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
