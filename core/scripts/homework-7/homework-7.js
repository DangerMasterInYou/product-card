import { comments } from "./comments.js";

// 2. Create an array of numbers from 1 to 10. Filter it so that we get an array of numbers starting from 5.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sortedNumbers = numbers.filter((number) => number.toString()[0] === "5");
console.log("[2] Отфильтрованные числа (начинающиеся на 5):", sortedNumbers);

// 3. Create an array of strings related to any entity
let movies = ["Крёстный отец", "Побег из Шоушенка", "Тёмный рыцарь"];

let hasMovie = movies.includes("Тёмный рыцарь");
console.log("[3] Проверка наличия фильма 'Тёмный рыцарь':", hasMovie);

// 4. Write a function that will take an array as an argument and reverse its order
function reverseArr(arr) {
  return [...arr].reverse();
}

sortedNumbers = reverseArr(sortedNumbers);
movies = reverseArr(movies);
console.log("[4] Перевернутый массив чисел:", sortedNumbers);
console.log("[4] Перевернутый массив фильмов:", movies);

// 7. Output to the console an array of those comments whose users' mail contains ".com"
let sortedComments = comments.filter((comment) => {
  return comment.email.endsWith(".com");
});
console.log("[7] Комментарии с email .com:", sortedComments);

// 8. Iterate through the array so that users with an id less than or equal to 5 have postId: 2, and those with an id greater than 5 have postId: 1
sortedComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));
console.log("[8] Комментарии с добавленным postId:", sortedComments);

// 9. Iterate through the array so that the objects consist only of an ID and a name
let commentsHeaders = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});
console.log("[9] Заголовки комментариев (только id и name):", commentsHeaders);

// 10. Iterate through the array, add the IsInvalid property to the objects
sortedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180 ? true : false,
}));
console.log("[10] Комментарии с проверкой длины текста:", sortedComments);

// 11. Read about the reduce array method
let emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log("[11] Emails через reduce:", emails);

sortedComments = comments.map((comment) => comment.email);
console.log("[11] Emails через map:", sortedComments);

// 12. Read about the toString() and join() methods
console.log("[12] Emails в формате строки:", emails.join(", "));
