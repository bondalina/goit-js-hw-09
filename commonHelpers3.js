import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */document.getElementById("findProcedureButton").addEventListener("click",function(){const t=document.querySelector('input[name="drySkin"]').checked,c=document.querySelector('input[name="oilySkin"]').checked,r=document.querySelector('input[name="acne"]').checked,i=document.querySelector('input[name="wrinkles"]').checked;let e="Unknown Procedure",n="";t?(e="Hydrating Facial",n="hydratingFacial"):c?(e="Oil Control Treatment",n="oilControlTreatment"):r?(e="Acne Spot Treatment",n="acneSpotTreatment"):i&&(e="Anti-Aging Facial",n="antiAgingFacial"),document.getElementById("procedureResult").innerHTML=`<p>${e}</p><p><a href="#${n}">Learn more</a></p>`});
//# sourceMappingURL=commonHelpers3.js.map