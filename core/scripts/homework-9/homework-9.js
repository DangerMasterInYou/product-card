import { Form } from "../homework-10/Form.js";
import { Modal } from "../homework-10/Modal.js";

// 4. Add logic to the Form attached in the footer:
// the email must comply with the standards (add validation), if it is not filled out, the form will not be sent.
// The "Subscribe" button is the "form submission", when clicked, we will output the console log as an object: { email: 'entered mail' }
let user;

const subscribeForm = document.querySelector("#subscribe-form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  user = Object.fromEntries(formData.entries());
  console.log(user);
  subscribeForm.reset();
});

// 5. Create a "Register" button. Create a modal window using the "modal, modal-shown" classes.
// The logic is this: when we click on the button, a modal window opens by adding modal-shown to the div with the modal class.
// Do not forget to add a button to close the modal (a cross in the corner).
// Important rules for creating a modal:
// 1) The background should be darkened, but not completely black (Creating an overlay class that will darken the entire page)
// 2) The modal window is located exactly in the center of the page, regardless of the scale
const modalBtn = document.querySelector(".modal-btn");
const modal = new Modal('registration-modal');
const overlay = modal.modalEl.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal-btn");

modalBtn.addEventListener("click", () => {
  modal.open();
});

overlay.addEventListener("click", () => modal.close());
closeModalBtn.addEventListener("click", () => modal.close());

// 6. Create a registration form inside the modal window.
// It should contain the fields: first name, last name, date of birth, login, password, password repetition.
// Use <label> to tell the user which field is responsible for what.
// It is also important to use a placeholder (you can read about all this in the documentation at the end of the post).
// It is allowed to add fields at your discretion. All fields must have validation.
// If the user has entered two different passwords or the form is invalid (using the checkValidity() method), we must warn them that registration has been rejected.
// If registration is successful, we output the form values to the log, as in task No. 4.
// Additionally, we need to add the CreatedOn property to this object and specify the creation time there (using the new Date() entity).
// Also create an external user variable and assign this object to it. After successful registration, the modal must be closed.
const registrationForm = new Form("registration-form");
(registrationForm.formEl).addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Исправьте значения полей");
    return;
  }

  let data = registrationForm.getValues();
  data.createdOn = new Date();
  delete data.passwordRepeat;
  user = data;

  console.log(user);
  registrationForm.reset();
  modal.close();
});
