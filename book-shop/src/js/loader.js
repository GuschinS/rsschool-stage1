import json from "../books.json";

const fragment = document.createDocumentFragment();

async function getBooks() {
  try {
    json.forEach((el) => {
      const book = document.createElement("div");
      book.classList.add("book");

      const imageLink = document.createElement("img");
      imageLink.classList.add("image-link");
      imageLink.src = el.imageLink;
      imageLink.alt = el.imageLink;
      imageLink.height = 300;

      const bookText = document.createElement("div");
      bookText.classList.add("book__text");

      const id = document.createElement("span");
      id.classList.add("id");
      id.textContent = el.id;

      const author = document.createElement("p");
      author.classList.add("author");
      author.textContent = el.author;

      const title = document.createElement("p");
      title.classList.add("title");
      title.textContent = el.title;

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `Price: ${el.price} $`;

      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = el.description;

      bookText.append(id, author, title, description, price);
      book.append(imageLink, bookText);

      fragment.append(book);
      return fragment;
    });
  } catch {
    console.error("error");
  }
}

getBooks();

export { fragment, getBooks };
