import { newTag } from './create-element';

class Modal {
    overlay: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
    modal: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
    cardImg: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
    textContainer: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
        id?: string | number;
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
    description: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
    btnCloseModal: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: string | number;
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
    constructor(title: string, description: string, thumbnail: string) {
        this.overlay = newTag('div', { className: 'pop-up-background' });
        this.modal = newTag('div', { className: 'modal' });
        this.cardImg = newTag('img', {
            className: 'card__img',
            src: thumbnail,
            width: 200,
            alt: title,
        });
        this.textContainer = newTag('div', { className: 'modal-text-container' });
        // title
        this.title = newTag('h3', {
            className: 'modal-title',
            innerHTML: title,
        });
        // description
        this.description = newTag('p', {
            className: 'modal-description',
            innerHTML: description,
        });
        // close button
        this.btnCloseModal = newTag('button', {
            className: 'pop-up-close-button',
        });

        this.listenEvents();
    }
    listenEvents() {
        this.btnCloseModal.addEventListener('click', () => this.closeModal());
    }
    render() {
        this.modal.append(this.cardImg);
        this.modal.append(this.textContainer);
        this.modal.append(this.btnCloseModal);
        this.textContainer.append(this.title);
        this.textContainer.append(this.description);

        return this.modal;
    }
    openModal() {
        const overlay = document.querySelector('.pop-up-background');
        overlay.append(this.render());
        overlay.classList.add('open');
    }
    closeModal() {
        this.modal.remove();
        const overlay = document.querySelector('.pop-up-background');

        overlay.classList.remove('open');
    }
}

export { Modal };
