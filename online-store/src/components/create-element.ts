function newTag(
    tag: string,
    options?: {
        className?: string;
        innerText?: string | Node;
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
    }
) {
    return Object.assign(document.createElement(tag), options);
}

export { newTag };
