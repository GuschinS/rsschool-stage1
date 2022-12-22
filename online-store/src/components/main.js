import { newTag } from './create-element';
import { ProductCatalog } from './product-catalog';
import { Filters } from './filters';

class Main {
    constructor() {
        this.main = newTag('main');
        this.container = newTag('div', { className: 'container' });
    }
    render() {
        this.main.append(this.container);
        this.container.append(new Filters().renderFilters());
        this.container.append(new ProductCatalog().render());
        

        return this.main;
    }
}

export { Main };
