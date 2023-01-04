import { newTag } from './create-element';

class Form {
    [x: string]: any;
    constructor() {
        this.formWrapper = newTag('div', {
            className: 'form__section',
        });

        this.form = newTag('form', {
            className: 'order-form',
            action: '../dist/order.html',
        });

        this.nameLabel = newTag('label', {
            className: 'name-label label',
            innerHTML: 'Name',
        });
        this.name = newTag('input', {
            className: 'name-input input',
            type: 'text',
            pattern: '^[A-Za-z]{4,}$',
            required: true,
        });

        this.surnameLabel = newTag('label', {
            className: 'surname-label label',
            innerHTML: 'Surname',
        });
        this.surname = newTag('input', {
            className: 'surname-input input',
            type: 'text',
            required: true,
            pattern: '^[A-Za-z]{5,}$',
        });

        this.deliveryLabel = newTag('label', {
            className: 'delivery-label label',
            innerHTML: 'Delivery',
        });
        this.delivery = newTag('input', {
            className: 'delivery-input input',
            type: 'date',
            required: true,
            min: '2022-12-23',
        });

        this.streetLabel = newTag('label', {
            className: 'street-label label',
            innerHTML: 'Street',
        });
        this.street = newTag('input', {
            className: 'street-input input',
            type: 'text',
            required: true,
            pattern: '^[A-Za-z0-9][A-Za-z0-9 ]{5,}$',
        });

        this.houseLabel = newTag('label', {
            className: 'house-label label',
            innerHTML: 'House number',
        });
        this.house = newTag('input', {
            className: 'house-input input',
            type: 'number',
            required: true,
            pattern: '^[1-9]*$',
        });

        this.flatLabel = newTag('label', {
            className: 'flat-label label',
            innerHTML: 'Flat number',
        });
        this.flat = newTag('input', {
            className: 'flat-input input',
            type: 'text',
            required: true,
            pattern: '^[1-9–]+[-0-9–]*$',
        });

        this.fieldset = newTag('fieldset');
        this.legend = newTag('legend', {
            innerHTML: 'Choose the payment type',
        });

        this.cashContainer = newTag('div', {
            className: 'cash-container',
        });
        this.cash = newTag('input', {
            className: 'cash-input',
            type: 'radio',
            name: 'payment-type',
            id: 'cash',
        });
        this.cashLabel = newTag('label', {
            className: 'cash-label',
            innerHTML: 'Cash',
            for: 'cash',
        });

        this.cardContainer = newTag('div', {
            className: 'card-container',
        });
        this.card = newTag('input', {
            className: 'card-input',
            type: 'radio',
            name: 'payment-type',
            id: 'card',
            checked: true,
        });
        this.cardLabel = newTag('label', {
            className: 'card-label',
            innerHTML: 'Card',
            for: 'card',
        });

        this.inputButton = newTag('input', {
            className: 'input-button btn',
            innerHTML: 'submit',
            type: 'submit',
        });
        this.listenEvents();
    }
    render() {
        this.formWrapper.append(this.form);
        this.nameLabel.append(this.name);
        this.surnameLabel.append(this.surname);
        this.deliveryLabel.append(this.delivery);
        this.streetLabel.append(this.street);
        this.houseLabel.append(this.house);
        this.flatLabel.append(this.flat);
        this.cashContainer.append(this.cash, this.cashLabel);
        this.cardContainer.append(this.card, this.cardLabel);
        this.fieldset.append(this.legend, this.cashContainer, this.cardContainer);
        this.form.append(
            this.nameLabel,
            this.surnameLabel,
            this.deliveryLabel,
            this.streetLabel,
            this.houseLabel,
            this.flatLabel,
            this.fieldset,
            this.inputButton
        );
        return this.formWrapper;
    }
    listenEvents() {
        this.inputButton.addEventListener('click', () => {
            localStorage.setItem('name', this.name.value);
            localStorage.setItem('surname', this.surname.value);
            localStorage.setItem('delivery', this.delivery.value);
            localStorage.setItem('street', this.street.value);
            localStorage.setItem('house', this.house.value);
            localStorage.setItem('flat', this.flat.value);
            localStorage.setItem('cash', this.cash.checked);
            localStorage.setItem('card', this.card.checked);
        });
    }
}

export { Form };
