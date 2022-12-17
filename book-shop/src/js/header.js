const body = document.querySelector("body");

const buildHeader = () => {
  const header = document.createElement("header");
  const headerWrapper = document.createElement("div");
  const logo = document.createElement("div");
  const counter = document.createElement("div");
  const cart = document.createElement("div");

  headerWrapper.classList.add("header-wrapper");
  logo.classList.add("logo");
  cart.classList.add("cart");

  const logoLink = document.createElement("a");
  const cartLink = document.createElement("a");
  logoLink.classList.add("logo__link");
  cartLink.classList.add("cart__link");
  logo.append(logoLink);
  cart.append(cartLink);
  counter.classList.add("counter");
  let count = 0;
  if (localStorage.getItem("count")) {
    count = localStorage.getItem("count");
  }
  counter.textContent = count;
  cart.append(counter);
  headerWrapper.append(logo, cart);
  header.append(headerWrapper);
  body.append(header);
};

buildHeader();

// export { header };
