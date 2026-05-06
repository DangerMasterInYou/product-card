// 4. Add logic to the Form attached in the footer:
// the email must comply with the standards (add validation), if it is not filled out, the form will not be sent.
// The "Subscribe" button is the "form submission", when clicked, we will output the console log as an object: { email: 'entered mail' }
const subscribeForm = document.querySelector("#subscribe-form");
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(`email: ${data.email}`);
  subscribeForm.reset();
});

// 5. Create a "Register" button. Create a modal window using the "modal, modal-shown" classes.
// The logic is this: when we click on the button, a modal window opens by adding modal-shown to the div with the modal class.
// Do not forget to add a button to close the modal (a cross in the corner).
// Important rules for creating a modal:
// 1) The background should be darkened, but not completely black (Creating an overlay class that will darken the entire page)
// 2) The modal window is located exactly in the center of the page, regardless of the scale
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal-btn");

modalBtn.addEventListener("click", () => {
  console.log(`Show modal`);
  modal.classList.add("modal-showed");
});

function hideModal() {
  modal.classList.remove("modal-showed");
}

overlay.addEventListener("click", () => hideModal());
closeModalBtn.addEventListener("click", () => hideModal());

// 6. Create a registration form inside the modal window.
// It should contain the fields: first name, last name, date of birth, login, password, password repetition.
// Use <label> to tell the user which field is responsible for what.
// It is also important to use a placeholder (you can read about all this in the documentation at the end of the post).
// It is allowed to add fields at your discretion. All fields must have validation.
// If the user has entered two different passwords or the form is invalid (using the checkValidity() method), we must warn them that registration has been rejected.
// If registration is successful, we output the form values to the log, as in task No. 4.
// Additionally, we need to add the CreatedOn property to this object and specify the creation time there (using the new Date() entity).
// Also create an external user variable and assign this object to it. After successful registration, the modal must be closed.
const registrationForm = modal.querySelector(".registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (checkValidity(data)) {
    data.createOn = new Date();
    console.log(`Пользователь создан в : ${data.createOn}`);
  };


});

function isCapitalized(str) {
  return /^[A-ZА-ЯЁ][a-zа-яё]*$/.test(str);
}

function isLoginValid(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

function getAge(birthday) {
  if (!birthday) return NaN;
  birthday = new Date(birthday);

  const now = new Date();
  let age = now.getFullYear() - birthday.getFullYear();

  return age;
}

function checkValidity(data) {
  const name = data.name;
  const surname = data.surname;
  const birthday = data.birthday;
  const login = data.login;
  const password = data.password;
  const passwordRepeat = data.passwordRepeat;

  if (!isCapitalized(name)) {
    alert("Испарвьте значения полей")
    return false;
  }
  else if (!isCapitalized(surname)) {
    alert("Испарвьте значения полей")
    return false;
  }
  else if (getAge(birthday) <= 14) {
    alert("Испарвьте значения полей")
    return false;
  }
  else if (!isLoginValid(login)) {
    alert("Испарвьте значения полей")
    return false;
  }
  else if (password.length < 6 && password !== passwordRepeat) {
    alert("Испарвьте значения полей")
    return false;
  }
  else {
    console.log(`
      name: ${data.name},
      surname: ${data.surname},
      birthday: ${data.birthday},
      login: ${data.login},
      password: ${data.password},
      passwordRepeat: ${data.passwordRepeat}
      `);
    return true;
  }
}
