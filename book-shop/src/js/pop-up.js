const counterDiv = document.querySelector(".counter");
// const author = document.querySelector(".open-book .author");
let arrayCart = [];

const createdPopUp = () => {
  const main = document.querySelector("main");
  if (main) {
    const popUpBackground = document.createElement("div");
    popUpBackground.classList.add("pop-up-background");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const popupCloseButton = document.createElement("span");
    popupCloseButton.classList.add("pop-up-close-button");
    const cartButton = document.createElement("button");
    cartButton.classList.add("cart-button");
    cartButton.textContent = "Add to cart";
    popUp.append(popupCloseButton);
    popUp.append(cartButton);
    popUpBackground.append(popUp);
    main.append(popUpBackground);
  }
};

createdPopUp();

const popupBooksHandler = (book) => {
  const popUpBackground = document.querySelector(".pop-up-background");
  const popupCloseButton = document.querySelector(".pop-up-close-button");
  const cartButton = document.querySelector(".cart-button");
  const popUp = document.querySelector(".pop-up");
  popUpBackground.classList.toggle("open");
  const bookCopy = book.cloneNode(true);
  popUp.innerHTML = "";
  bookCopy.remove();
  popUp.append(bookCopy, popupCloseButton, cartButton);
  bookCopy.classList.toggle("open-book");
};

const selectedBook = () => {
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.addEventListener("click", () => {
      popupBooksHandler(book);
    });
  });
};

const closePopup = () => {
  const popUpBackground = document.querySelector(".pop-up-background");
  popUpBackground.classList.toggle("open");
};

//Counter to cart
let count = 0;
const addedBook = () => {
  if (localStorage.getItem("count")) {
    count = localStorage.getItem("count");
    const openBook = document.querySelector(".open-book");
    let array = [];
    array.push(openBook);
    // localStorage.setItem("openBook", JSON.stringify(openBook));
    let el = array[0].childNodes[1].childNodes[0].textContent;
    arrayCart.push(el);
    localStorage.setItem("arrayCart", arrayCart);
  }
  count++;
  counterDiv.textContent = count;
  localStorage.setItem("count", count);
  closePopup();
};

export { createdPopUp, selectedBook, closePopup, addedBook, arrayCart };
