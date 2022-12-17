import { newTag } from "./create-element";
import { Overlay } from "./overlay";

class Modal {
  constructor(imageLink, author, title, description, ...classes) {
    this.overlay = newTag("div", { className: "pop-up-background" });
    this.modal = newTag("div", { className: "modal" });
    this.cardImg = newTag("img", {
      className: "card__img",
      src: imageLink,
      width: 200,
      alt: title,
    });
    this.textContainer = newTag("div", { className: "modal-text-container" });
    this.author = newTag("h2", {
      className: "modal-author",
      innerHTML: author,
    });
    // title
    this.title = newTag("h3", {
      className: "modal-title",
      innerHTML: title,
    });
    // description
    this.description = newTag("p", {
      className: "modal-description",
      innerHTML: description,
    });
    // close button
    this.btnCloseModal = newTag("button", {
      className: "pop-up-close-button",
    });

    this.listenEvents();
  }
  listenEvents() {
    this.btnCloseModal.addEventListener("click", () => this.closeModal());
  }
  render() {
    this.modal.append(this.cardImg);
    this.modal.append(this.textContainer);
    this.modal.append(this.btnCloseModal);
    this.textContainer.append(this.author);
    this.textContainer.append(this.title);
    this.textContainer.append(this.description);

    return this.modal;
  }
  openModal() {
    const overlay = document.querySelector(".pop-up-background");
    overlay.append(this.render());
    overlay.classList.add("open");
  }
  closeModal() {
    this.modal.remove();
    const overlay = document.querySelector(".pop-up-background");

    overlay.classList.remove("open");
  }
}

export { Modal };
