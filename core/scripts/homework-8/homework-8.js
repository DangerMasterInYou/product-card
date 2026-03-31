import { products } from "./products.js";

// 3. By analogy from the lecture, create and implement a template for grocery cards.  (Look at task 5 right away)
const productTemplate = document.getElementById('product-card-template');

function renderProductCards(parentSectionEl, productsToRender) {
  parentSectionEl.innerHTML = '';

  productsToRender.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    console.log(productClone);

    const img = productClone.querySelector('.product-card__image');
    img.setAttribute('src', `/assets/images/${product.imageUrl}.png`);
    img.setAttribute('alt', product.imageAlt);

    productClone.querySelector('.product-card__type-skin').textContent = product.typeSkin;
    productClone.querySelector('.product-card__name').textContent = product.name;
    productClone.querySelector('.product-card__descr').textContent = product.description;

    const compositionUl = productClone.querySelector('.product-card__composition');
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.className = 'product-card__composition-item';
      li.textContent = item;
      compositionUl.appendChild(li);
    });

    productClone.querySelector('.product-card__price-value').innerHTML = product.price.toLocaleString('ru-RU') + ' ' + product.currency;

    parentSectionEl.appendChild(productClone);
  })
}

// 4. Using the .reduce() method, get an array of objects where the key is the product name and the value is its description
const productsLite = products.reduce((acc, product) => [
  ...acc,
  { [product.name]: product.description }
], []);
console.log(productsLite);

// 5*. Implement a function that, at the start of the page, displays a message (via the prompt function) "How many cards should I display? From 1 to 5" and depending on the result, it will output the entered amount.
// There must be protection against entering other values (if check).
// That is, we will have 2 functions, one returns the number of cards to be entered, the other is to render these cards (taking the array as an argument)
const productSection = document.getElementById('product-card-prompt-wrapper');

function getProductCardsCount() {
  while (true) {
    let inputCount = parseInt(prompt('Сколько карточек отобразить? От 1 до 5'), 10);
    if (!isNaN(inputCount) && inputCount >= 1 && inputCount <= 5) {
      return inputCount;
    } else {
      alert('Пожалуйста, введите число от 1 до 5!');
    }
  }
}

function showProductCards() {
  const cardCount = getProductCardsCount();
  const productsToRender = products.slice(0, cardCount);
  renderProductCards(productSection, productsToRender);
}

showProductCards();