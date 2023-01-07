import { newTag } from './create-element';
import { ProductCatalog } from './product-catalog';
import { Filters } from './filters';
import { Cart } from './cart';
import { Form } from './order-form';

class Main {
    main: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string;
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
    container: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string;
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
        this.main = newTag('main');
        this.container = newTag('div', { className: 'container open' });
    }
    render() {
        this.main.append(new Cart().renderCart());
        this.main.append(this.container);
        this.main.append(new Form().render());
        this.container.append(new Filters().renderFilters());
        this.container.append(new ProductCatalog().render());

        return this.main;
    }
}

export { Main };
