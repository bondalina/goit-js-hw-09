import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r="feedback-form-state",t=document.querySelector(".feedback-form"),a=t.querySelector("input"),o=t.querySelector("textarea");t.addEventListener("submit",m);function m(e){if(e.preventDefault(),a.value.trim()===""||o.value.trim()===""){alert("All form fields must be filled in");return}localStorage.removeItem(r),e.currentTarget.reset()}t.addEventListener("input",i);function i(e){const n={email:a.value.trim(),message:o.value.trim()};localStorage.setItem(r,JSON.stringify(n))}function l(){const e=JSON.parse(localStorage.getItem(r))??{};e.email&&(a.value=e.email),e.message&&(o.value=e.message)}l();
//# sourceMappingURL=commonHelpers2.js.map
