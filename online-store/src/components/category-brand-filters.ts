import { newTag } from './create-element';

class CategoriesBrands {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    constructor(name: unknown) {
        this.name = name;
        this.currentName = newTag('div', {
            className: 'checkbox-line',
        });
        this.currentName.classList.add('item-active');
        this.checkbox = newTag('input', {
            type: 'checkbox',
            id: this.name,
        });
        this.label = newTag('label', {
            innerText: this.name,
        });
    }
    renderCategoriesBrands() {
        this.currentName.append(this.checkbox);
        this.currentName.append(this.label);

        return this.currentName;
    }
}

export { CategoriesBrands };
