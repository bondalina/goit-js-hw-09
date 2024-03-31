document
  .getElementById('findProcedureButton')
  .addEventListener('click', function () {
    const drySkin = document.querySelector('input[name="drySkin"]').checked;
    const oilySkin = document.querySelector('input[name="oilySkin"]').checked;
    const acne = document.querySelector('input[name="acne"]').checked;
    const wrinkles = document.querySelector('input[name="wrinkles"]').checked;

    let procedure = 'Unknown Procedure';
    let procedureId = '';
    if (drySkin) {
      procedure = 'Hydrating Facial';
      procedureId = 'hydratingFacial';
    } else if (oilySkin) {
      procedure = 'Oil Control Treatment';
      procedureId = 'oilControlTreatment';
    } else if (acne) {
      procedure = 'Acne Spot Treatment';
      procedureId = 'acneSpotTreatment';
    } else if (wrinkles) {
      procedure = 'Anti-Aging Facial';
      procedureId = 'antiAgingFacial';
    }

    document.getElementById(
      'procedureResult'
    ).innerHTML = `<p>${procedure}</p><p><a href="#${procedureId}">Learn more</a></p>`;
  });
