//  `
//     <div class="workout-block">
//       <p class="workout-title">Workout</p>
//       <button class="delete-from-fav" type="button">
//         <svg class="delete-icon" width="16" height="16">
//           <use href="../img/sprite.svg#icon-delete"></use>
//         </svg>
//       </button>
//     </div>
//     <button class="start-btn" type="button">
//       Start
//       <svg class="arrow-icon" width="14" height="14">
//         <use href="../img/sprite.svg#icon-arrow"></use>
//       </svg>
//     </button>
//     <div class="ex-title-block">
//       <div class="icon-man-wraper">
//         <svg class="man-icon" width="16" height="16">
//           <use href="../img/sprite.svg#icon-running-man"></use>
//         </svg>
//       </div>
//       <h3 class="ex-title">${exercise.name}</h3>
//     </div>
//     <ul class="list-ex-category">
//       <li>
//         <p class="category-text">
//           <span class="category-text-accent">Burned calories: ${exercise.burnedCalories} </span
//           >200/ 3 min
//         </p>
//       </li>
//       <li>
//         <p class="category-text">
//           <span class="category-text-accent">Body part: ${exercise.bodyPart}: </span>Waist
//         </p>
//       </li>
//       <li>
//         <p class="category-text">
//           <span class="category-text-accent">Target: ${exercise.target}: </span>Abs
//         </p>
//       </li>
//     </ul>
//   `;

//   // Додавання обробників подій для кнопок
//   const deleteBtn = exerciseItem.querySelector('.delete-from-fav');
//   deleteBtn.addEventListener('click', function () {
//     exerciseItem.remove();
//   });

//   // Додавання нового елемента li до списку улюблених вправ
//   const favoritesList = document.getElementById('exercise-container');
//   favoritesList.appendChild(exerciseItem);
// }

function saveExerciseData(cardElement) {
  // Отримати всі елементи, які ми хочемо зберегти
  const name = cardElement.querySelector('.exercise-name').textContent;
  const target = cardElement.querySelector('.exercise-target').textContent;
  const bodyPart = cardElement.querySelector('.exercise-body-part').textContent;
  const equipment = cardElement.querySelector(
    '.exercise-equipment'
  ).textContent;
  const popularity = cardElement.querySelector(
    '.exercise-popularity'
  ).textContent;
  const burnedCalories = cardElement.querySelector(
    '.exercise-burned-calories'
  ).textContent;

  // Створити об'єкт для зберігання даних
  const exercise = {
    name: name,
    target: target,
    bodyPart: bodyPart,
    equipment: equipment,
    popularity: popularity,
    burnedCalories: burnedCalories,
  };

  // Повернути об'єкт з даними вправи
  return exercise;
}
