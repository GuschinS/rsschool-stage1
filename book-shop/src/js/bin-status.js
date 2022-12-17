function toggleBinStatus() {
  const binWrapper = document.querySelector(".cart-lists");
  const cardAlert = document.querySelector(".alert");
  const cardConfirm = document.querySelector(".bin-confirm");
  const btnRemoveAll = document.querySelector("#btn-remove-all");
  if (binWrapper.children.length > 0) {
    cardAlert.classList.add("none");
    btnRemoveAll.classList.remove("none");
    cardConfirm.classList.remove("none");
  } else {
    cardAlert.classList.remove("none");
    btnRemoveAll.classList.add("none");
    cardConfirm.classList.add("none");
  }
}

export { toggleBinStatus };
