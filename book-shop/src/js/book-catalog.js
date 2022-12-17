import { newTag } from "./create-element";

class BookCatalog {
  constructor() {
    this.bookCatalog = newTag("section", { className: "catalog-container" });
    this.title = newTag("h2", {
      className: "main__title",
      innerText: "Book Catalog",
    });
    this.cardsList = newTag("ul", { className: "cards__list" });
  }
  render() {
    this.bookCatalog.append(this.title);
    this.bookCatalog.append(this.cardsList);
    return this.bookCatalog;
  }
}

export { BookCatalog };
