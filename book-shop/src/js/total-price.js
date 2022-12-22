function increaseTotalPrice(value) {
  document.querySelector(".total__price").innerText =
    +document.querySelector(".total__price").innerText + value;
}
function decreaseTotalPrice(value) {
  document.querySelector(".total__price").innerText =
    +document.querySelector(".total__price").innerText - value;
}
function resetTotalPrice() {
  document.querySelector(".total__price").innerText = 0;
}

export { increaseTotalPrice, decreaseTotalPrice, resetTotalPrice };
