// 5. Create a Form.js file and implement a form class called Form.
// It will accept one parameter—the form ID. The class will contain methods:
// I. To retrieve all form values.
// II. To check the form's validity (the method returns true/false depending on whether the form is valid).
// III. To reset the form's values.
// Using this class, rewrite the logic of task #9, which deals with forms.
// How? Using internal methods, we can control the form ID's value retrieval and everything else the modal should do.

export class Form {
    constructor(formId) {
        this.formEl = document.querySelector(`#${formId}`);
    }

    getValues() {
        const formData = new FormData(this.formEl);
        return Object.fromEntries(formData.entries());
    }

    isValid() {
        const data = this.getValues();

        if (data.password !== data.passwordRepeat) {
            alert("Пароли не совпадают");
            return false;
        }

        return this.formEl.checkValidity();
    }

    reset() {
        this.formEl.reset();
    }
}