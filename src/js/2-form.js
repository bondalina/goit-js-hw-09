const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

emailInput.addEventListener("input", onInput);
textarea.addEventListener("input", onInput);
function onInput(event) {
    const formInfo = {
      email: emailInput.value,
      message: textarea.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
  }

function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage.email) {
        emailInput.value = savedMessage.email;
    }
    if (savedMessage.message) {
        textarea.value = savedMessage.message;
    }
}
populateForm();