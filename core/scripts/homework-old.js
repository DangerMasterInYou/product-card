function switchColorOnClick(el) {
  el.classList.toggle("switch-background-color");
}

function openLink(link) {
  confirm(`Вы действительно хотите перейти на сайт ${link}?`)
    ? window.open(`https://${link}`, "_blank")
    : console.log(`User cancel redirect to ${link}`);
}

// Recolor first element card
const recolorFirstElCardButton = document.getElementById(
  "recolor-first-el-card-button",
);
const firstCardElement = document.getElementsByClassName("product-card")[0];

recolorFirstElCardButton.addEventListener("click", () =>
  switchColorOnClick(firstCardElement),
);

// Recolor all element card
const recolorAllElCardButton = document.getElementById(
  "recolor-all-el-card-button",
);
const allCardElements = document.getElementsByClassName("product-card");

recolorAllElCardButton.addEventListener("click", () =>
  Array.from(allCardElements).forEach((cardElement) =>
    switchColorOnClick(cardElement),
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
