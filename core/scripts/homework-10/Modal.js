// 4. Create a Modal file.js and create a class for a modal window called Modal in it. It will accept 1 parameter through the modal window's ID constructor.
// There will be methods inside the class:
//   I. To open the modal window.
//   II. To close the modal window.
//   III. To check if the modal window is currently open.
//   IV. A method that listens to the button (cross) to close the modal and closes the modal (implement via EventListener) and call in the constructor
// Using this class, you can rewrite the logic of task No. 9 related to modal windows. How? Using internal methods, we can control its closure and opening through the ID mode.
export class Modal {
    #modalId;
    modalEl;

    constructor(modalId) {
        this.#modalId = modalId;
        this.modalEl = null;
        this.clickCLoseBtn();
    }

    #updateEl() {
        this.modalEl = document.querySelector(`#${this.#modalId}`);
    }

    open() {
        this.#updateEl();
        if (this.modalEl) {
            this.modalEl.classList.add("modal-showed");
        } else {
            console.trace()
        }
    }

    close() {
        this.#updateEl();
        if (this.modalEl) {
            this.modalEl.classList.remove("modal-showed");
        } else {
            console.trace()
        }
    }

    outputState() {
        this.#updateEl();
        if (this.modalEl) {
            let msg = this.modalEl.classList.contains("modal-showed") ? "Открыто" : "Закрыто";
            console.log(msg);
        } else {
            console.trace()
        }
    }

    clickCLoseBtn() {
        this.#updateEl();
        if (this.modalEl) {
            let closeBtn = this.modalEl.querySelector(".close-modal-btn");

            if (closeBtn) {
                closeBtn.addEventListener("click", () => this.close());
            } else {
                console.trace()
            }
        } else {
            console.trace()
        }
    }
}