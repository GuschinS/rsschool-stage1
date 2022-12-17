const order = document.querySelector(".order");

const createdOrder = () => {
  const firstName = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const delivery = document.querySelector(".delivery");
  const street = document.querySelector(".street");
  const house = document.querySelector(".house");
  const flat = document.querySelector(".flat");
  const payment = document.querySelector(".payment-type");
  firstName.textContent = localStorage.getItem("name");
  surname.textContent = localStorage.getItem("surname");
  delivery.textContent = localStorage.getItem("delivery");
  street.textContent = localStorage.getItem("street");
  house.textContent = localStorage.getItem("house");
  flat.textContent = localStorage.getItem("flat");
  if (localStorage.getItem("cash") === false) {
    payment.textContent = "Card";
  } else {
    payment.textContent = "Cash";
  }
};
const reset = () => {
  localStorage.clear();
  window.location = "../dist/index.html";
};
if (order) {
  const closeButton = document.querySelector(".close-button");
  createdOrder();
  closeButton.addEventListener("click", reset);
}
