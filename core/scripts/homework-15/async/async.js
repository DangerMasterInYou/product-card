function isUser(obj) {
  const requiredFields = [
    "name",
    "surname",
    "email",
    "age",
    "city",
    "is_active",
  ];

  return requiredFields.every((field) => {
    return obj.hasOwn(field);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function removeUser(email) {
  const data = JSON.parse(localStorage.getItem("users"));
  const filteredData = data.filter((user) => {
    return user.email != email;
  });
  localStorage.setItem("users", JSON.stringify(filteredData));

  const newData = JSON.parse(localStorage.getItem("users"));
  renderUserCards(userCardWrapper, newData);
}

async function fetchData() {
  const response = await fetch("./users.json");
  if (!response.ok) throw new Error(`Ошибка чтения json! ${response.status}`);
  const data = (await response.json()).users;
  data.forEach((user) => {
    if (!isUser(user)) {
      throw new Error(`ОбЪект не является user! ${user}`);
    }
  });
  localStorage.setItem("users", JSON.stringify(data));
}

function renderUserCards(parentSectionEl, usersToRender) {
  parentSectionEl.innerHTML = "";

  usersToRender.forEach((user) => {
    const userClone = userCardTemplate.content.cloneNode(true);

    userClone.querySelector(".user-card__name").textContent = user.name;
    userClone.querySelector(".user-card__surname").textContent = user.surname;
    userClone.querySelector(".user-card__email").textContent = user.email;
    userClone.querySelector(".user-card__age").textContent = user.age;
    userClone.querySelector(".user-card__city").textContent = user.city;
    userClone.querySelector(".user-card__active").textContent = user.is_active
      ? "Активен"
      : "Неактивен";

    userClone
      .querySelector(".btn-remove")
      .addEventListener("click", () => removeUser(user.email));

    parentSectionEl.appendChild(userClone);
  });
}

async function isLoading() {
  try {
    if (localStorage.getItem("users") == null) {
      titleEl.textContent = "Данные загружаются";
      fetchData();
      await delay(3000);
      titleEl.textContent = "";
    }
    const data = JSON.parse(localStorage.getItem("users"));
    renderUserCards(userCardWrapper, data);
  } catch (err) {
    alert(err);
    titleEl.textContent = err;
  }
}

async function getUsers() {
  try {
    await fetchData();
    const data = JSON.parse(localStorage.getItem("users"));
    renderUserCards(userCardWrapper, data);
  } catch (err) {
    alert(err);
    titleEl.textContent = err;
  }
}

const heroEl = document.querySelector(".hero");
const titleEl = heroEl.querySelector(".title");
const userCardWrapper = heroEl.querySelector("#user-card-wrapper");
const userCardTemplate = document.querySelector("#user-card-template");
const getUsersBtn = document.querySelector("#btn-get-all");
const deleteUsersBtn = document.querySelector("#btn-delete-all");

getUsersBtn.addEventListener("click", getUsers);

deleteUsersBtn.addEventListener("click", () => {
  localStorage.removeItem("users");
  userCardWrapper.innerHTML = "";
});

isLoading();

// Задание
// Обработать различные сценарии (отображать ошибку через new Error, если данные не загрузились и отображать текст на странице "Ошибка при загрузке данных" и так далее, отображать информационное сообщение, если пользователь хочет получить всех пользователей, а у него отображены и так все пользователи и т.д.)

// Ключевой результат:
// Данные не загрузились — отображаем ошибку
