import { newTag } from './create-element';

class CategoriesBrands {
	constructor(name) {
			this.name = name;
			this.currentName = newTag('div', {
					className: 'checkbox-line',
			});
			this.currentName.classList.add('item-active');
			this.checkbox = newTag('input', {
				type: 'checkbox',
				id: this.name
			});
			this.label = newTag('label', { 
				innerText: this.name
			});
	}
	renderCategoriesBrands() {
			this.currentName.append(this.checkbox);
			this.currentName.append(this.label);

			return this.currentName;
	}
}

export { CategoriesBrands };
