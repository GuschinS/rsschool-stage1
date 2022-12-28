import { newTag } from './create-element';
import { selectCategory } from './select-filter';

class Filters {
    constructor() {
        this.filtersContainer = newTag('section', {
            className: 'filters-section',
        });
        //buttons
        this.resetFilters = newTag('div', { className: 'filters-reset' });
        this.resetButton = newTag('button', {
            id: 'filters-reset-button',
            innerText: 'Reset Filters',
        });
        this.saveButton = newTag('button', {
            id: 'filters-save',
            innerText: 'Copy Filters',
        });
        //category
        this.filtersCategory = newTag('div', { className: 'filters-category' });
        this.filtersCategoryName = newTag('h3', { className: 'filters-category-name' });
        this.filtersCategoryList = newTag('div', { className: 'filters-category-list' });
        //brand
        this.filtersBrand = newTag('div', { className: 'filters-brand' });
        this.filtersBrandName = newTag('h3', { className: 'filters-brand-name' });
        this.filtersBrandList = newTag('div', { className: 'filters-brand-list' });
        //price
        this.filtersPrice = newTag('div', { className: 'filters-price' });
        this.filtersPriceName = newTag('h3', { className: 'filters-price-name' });
        this.filtersPriceData = newTag('div', { className: 'filters-price-data' });
        this.filtersPriceFrom = newTag('div', { className: 'filters-price-from' });
        this.filtersPriceTo = newTag('div', { className: 'filters-price-to' });
        //stock
        this.filtersStock = newTag('div', { className: 'filters-stock' });
        this.filtersStockName = newTag('h3', { className: 'filters-stock-name' });
        this.filtersStockData = newTag('div', { className: 'filters-stock-data' });
        this.filtersStockFrom = newTag('div', { className: 'filters-stock-from' });
        this.filtersStockTo = newTag('div', { className: 'filters-stock-to' });

        this.listenEvents();
    }
    renderFilters() {
        this.filtersContainer.append(this.resetFilters);
        this.resetFilters.append(this.resetButton);
        this.resetFilters.append(this.saveButton);
        this.filtersContainer.append(this.filtersCategory);
        this.filtersCategory.append(this.filtersCategoryName);
        this.filtersCategory.append(this.filtersCategoryList);
        this.filtersContainer.append(this.filtersBrand);
        this.filtersBrand.append(this.filtersBrandName);
        this.filtersBrand.append(this.filtersBrandList);
        this.filtersContainer.append(this.filtersPrice);
        this.filtersPrice.append(this.filtersPriceName);
        this.filtersPrice.append(this.filtersPriceData);
        this.filtersPrice.append(this.filtersPriceFrom);
        this.filtersPrice.append(this.filtersPriceTo);
        this.filtersContainer.append(this.filtersStock);
        this.filtersStock.append(this.filtersStockName);
        this.filtersPrice.append(this.filtersStockData);
        this.filtersPrice.append(this.filtersStockFrom);
        this.filtersPrice.append(this.filtersStockTo);

        return this.filtersContainer;
    }

    listenEvents() {
        this.filtersCategory.addEventListener('click', (event) => {
            event.target.classList.toggle('select');
            selectCategory();

            // this.setToLocalStorage();
        });
    }
}

export { Filters };
