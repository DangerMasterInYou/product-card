// 1. Create an object based on your data.
// First name, last name, post, job, position, age, country, city, relationship status, and so on.
// The more, the better (but don't get carried away, up to 10 maximum). Choose the correct name for the variable.
const person = {
  firstName: "Imo",
  lastName: "Bak",
  age: 22,
  profession: "Developer",
  salary: 1000000,
  country: "Russia",
  tg: "@Volvoler",
  healthStatus: "Master of sports in all sports",
  hobby: "Thinking",
};

// 2. Create an object that will store data about the car (make, model, year of manufacture, color, type of box).
// Add an additional property - the owner of the car, the value of which will be the OBJECT described in paragraph 3.
// It is advisable to add a separate line (meaning not when creating an object)
let car = {
  brand: "Kia",
  model: "K900",
  year: 2026,
  color: "Gray",
  owner: undefined,
};

car.owner = person;

// 3. Write a function that will take as an argument the object described in paragraph 4.
// It checks if there is a "maximum speed" property in the object, if not, adds it and sets the value, if there is, stops execution (does nothing)
function hasPropertyMaxSpeed(obj) {
  if (!Object.hasOwn(obj, "maxSpeed")) {
    obj.maxSpeed = 299792458;
  }
}

hasPropertyMaxSpeed(car);

// 4. Write a function that gets the object as the first argument, and the object's property as the second argument, which needs to be output and outputs its value.
function getProperty(obj, prop) {
  if (Object.hasOwn(obj, prop)) {
    console.log(obj[prop]);
  }
}

// 5. Create an array that contains product names (just strings).
const products = ["eggs", "oatmeal", "carrot", "cabbage", "peanut"];

// 6. Create an array consisting of objects, where the object is a book (title, author, year of release, cover color, genre) (3-5 books).
// Then, using the array method known to us, add another book to the end of the list.
// You can replace books with movies, or another entity, you get the idea.

let movies = [
  {
    title: "Крёстный отец",
    director: "Фрэнсис Форд Коппола",
    year: 1972,
    genre: "криминал",
    rating: 9.2,
  },
  {
    title: "Побег из Шоушенка",
    director: "Фрэнк Дарабонт",
    year: 1994,
    genre: "драма",
    rating: 9.3,
  },
  {
    title: "Тёмный рыцарь",
    director: "Кристофер Нолан",
    year: 2008,
    genre: "боевик",
    rating: 9.0,
  },
];

movies.push({
  title: "Люди в чёрном 3",
  director: "Барри Зонненфельд",
  year: 2012,
  genre: "фантастика, боевик, комедия",
  rating: 6.8,
});

// 7. Create another array consisting of the same books, but related to a specific universe (Harry Potter, Marvel, and so on).
// (If you use another, your own essence, improvise).
// Using the array method or operator known to us (I recommend using the operator), combine these two arrays into one.
const marvelMovies = [
  {
    title: "Железный человек",
    director: "Джон Фавро",
    year: 2008,
    genre: "фантастика, боевик",
    rating: 7.9,
    universe: "Marvel Cinematic Universe (MCU)",
  },
  {
    title: "Первый мститель",
    director: "Джо Джонстон",
    year: 2011,
    genre: "фантастика, приключения",
    rating: 6.9,
    universe: "Marvel Cinematic Universe (MCU)",
  },
  {
    title: "Тор",
    director: "Кеннет Брана",
    year: 2011,
    genre: "фантастика, фэнтези",
    rating: 7.0,
    universe: "Marvel Cinematic Universe (MCU)",
  },
  {
    title: "Мстители",
    director: "Джосс Уидон",
    year: 2012,
    genre: "фантастика, боевик",
    rating: 8.0,
    universe: "Marvel Cinematic Universe (MCU)",
  },
  {
    title: "Стражи Галактики",
    director: "Джеймс Ганн",
    year: 2014,
    genre: "фантастика, приключения, комедия",
    rating: 7.9,
    universe: "Marvel Cinematic Universe (MCU)",
  },
];

const allMovies = [...movies, ...marvelMovies];

// 8. Read about the array — map method.
// Write a function that accepts an array of entities from task number 9.
// We add a new property for the "isRare (this is rare)" object and, depending on the year of the book's release (or some logic related to your entity), set true or false.
// What I mean by this is: if the book was released later than 2000, set true (yes, it's rare), no - false (so it's not rare).
function addIsPopularProperty(arr) {
  return arr.map((el) => ({
    ...el,
    isPopular: Object.hasOwn(el, "rating") ? el.rating > 7 : false,
  }));
}
