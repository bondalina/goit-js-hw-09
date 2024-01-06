const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    if (emailInput.value.trim() === "" || textarea.value.trim() === "") {
        alert("All form fields must be filled in");
        return;
    }
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

form.addEventListener("input", onInput);
// textarea.addEventListener("input", onInput);
function onInput(event) {
    const formInfo = {
      email: emailInput.value.trim(),
      message: textarea.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
  }

function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
    if (savedMessage.email) {
        emailInput.value = savedMessage.email;
    }
    if (savedMessage.message) {
        textarea.value = savedMessage.message;
    }
}
populateForm();