/*1. Create a function that takes 2 parameters:
city and temperature and outputs a message to the console "The temperature is currently at X degrees Celsius"
*/
function currentWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`,
  );
}

currentWeather("СПб", 20);

/*2. Create a variable that stores the speed of light inside itself (Google).
Create a function that takes 1 argument - speed, a check is performed inside the function:
if the transmitted speed is higher than the speed of light, we output the log "Superluminal speed",
if lower — "Subluminal speed"?
if equal to, the "Speed of light"
*/
const LIGHT_SPEED = 299792458;

function comparisonSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log(`Сверхсветовая скорость `);
  } else if (speed < LIGHT_SPEED) {
    console.log(`Субсветовая скорость`);
  } else {
    console.log(`Скорость света`);
  }
}

comparisonSpeed(123);
comparisonSpeed(12345678910);
comparisonSpeed(299792458);

/*3. Create variable #1, which contains the product, and variable #2, which contains its price (at your discretion).
Next, we create a function that takes 1 parameter - the current budget, and a check takes place inside the function:
if the budget exceeds the price of the product, we output the log "(your product name) purchased.
Thanks for the purchase!", if not, we calculate the difference and output the log "You don't have enough X$, top up your balance."
That is, we are trying to purchase a product using the function.
*/
const nameProduct = "Macaroni";
const price = 500;

function buyProduct(budget) {
  budget >= price
    ? console.log(`${nameProduct} приобретён. Спасибо за покупку!`)
    : console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
}

buyProduct(499);
buyProduct(500);
buyProduct(501);

/*4. Create 1 function and name it as you wish
5. Create 3 variables (no matter which ones) and name them as you see fit.*/
function sumThreeRandomDigits() {
  const firstDigit = Math.floor(Math.random() * 10);
  const secondDigit = Math.floor(Math.random() * 10);
  const thirdDigit = Math.floor(Math.random() * 10);

  console.log(`Сумма цифр: ${firstDigit + secondDigit + thirdDigit}`);
}

sumThreeRandomDigits();
