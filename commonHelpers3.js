import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e="https://energyflow.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10";fetch(e).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{localStorage.setItem("exerciseData",JSON.stringify(t)),console.log("Дані збережено у локальному сховищі:",t)}).catch(t=>{console.error("Виникла помилка:",t)});
//# sourceMappingURL=commonHelpers3.js.map
