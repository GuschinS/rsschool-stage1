import { newTag } from './create-element';
import { ProductCatalog } from './product-catalog';
import { Filters } from './filters';
import { Cart } from './cart';

class Main {
    constructor() {
        this.main = newTag('main');
        this.container = newTag('div', { className: 'container' });
    }
    render() {
        this.main.append(new Cart().renderCart());
        this.main.append(this.container);
        this.container.append(new Filters().renderFilters());
        this.container.append(new ProductCatalog().render());

        return this.main;
    }
}

export { Main };
