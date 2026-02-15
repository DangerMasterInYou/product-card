function switchColorOnClick(el) {
  el.classList.toggle("switch-background-color");
}

function openLink(link) {
  confirm(`Вы действительно хотите перейти на сайт ${link}?`)
    ? window.open(`https://${link}`, "_blank")
    : console.log(`User cancel redirect to ${link}`);
}

// Recolor first element cart
const recolorFirstElCartButton = document.getElementById(
  "recolor-first-el-cart-button",
);
const firstCartElement = document.getElementsByClassName("product-cart")[0];

recolorFirstElCartButton.addEventListener("click", () =>
  switchColorOnClick(firstCartElement),
);

// Recolor all element cart
const recolorAllElCartButton = document.getElementById(
  "recolor-all-el-cart-button",
);
const allCartElements = document.getElementsByClassName("product-cart");

recolorAllElCartButton.addEventListener("click", () =>
  Array.from(allCartElements).forEach((cartElement) =>
    switchColorOnClick(cartElement),
  ),
);

// Redirection to the page Google
const googleOpenButton = document.getElementById("open-google-button");

googleOpenButton.addEventListener("click", () => openLink("google.com"));

// Text title output to the console
const titleElement = document.getElementsByClassName("title")[0];

titleElement.addEventListener("mouseover", () =>
  console.log(titleElement.textContent),
);

// Recolor button when pressed
const clickRecolorButton = document.getElementById("click-recolor-button");

clickRecolorButton.addEventListener("click", () =>
  switchColorOnClick(clickRecolorButton),
);
