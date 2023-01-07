import { newTag } from './create-element';

class Overlay {
    overlay: HTMLElement & {
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
        this.overlay = newTag('div', { className: 'pop-up-background' });
        this.listenEvents();
    }
    render() {
        return this.overlay;
    }
    listenEvents() {
        this.overlay.addEventListener('click', () => this.closeModals());
    }
    closeModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            modal.remove();
            this.overlay.classList.remove('open');
        });
    }
}

export { Overlay };
