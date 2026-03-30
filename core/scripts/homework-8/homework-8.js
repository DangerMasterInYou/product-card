import { products } from "./products.js";

// 3. By analogy from the lecture, create and implement a template for grocery cards.  (Look at task 5 right away)
const productTemplate = document.getElementById('product-card-template');
const productTemplateSection = document.getElementById('product-card-template-wrapper');

renderProductCards(productTemplateSection);

function renderProductCards(parentSectionEl, length = products.length){
  const productsToRender = products.slice(0, length);

  parentSectionEl.innerHTML = '';

  productsToRender.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    console.log(productClone);

    const img = productClone.querySelector('.product-card__image');
    img.setAttribute('src', `/assets/images/${product.imageUrl}`);
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
const productPromptSection = document.getElementById('product-card-prompt-wrapper');

function getCardCount() {
  let inputCount;

  while (true) {
    inputCount = parseInt(prompt('Сколько карточек отобразить? От 1 до 5'), 10);

    if (inputCount != null && !isNaN(inputCount) && 1 <= inputCount && inputCount <= 5) {
      renderProductCards(productPromptSection, inputCount);
      return;
    } else {
      alert('Пожалуйста, введите число от 1 до 5!');
    }
  }
}

getCardCount();