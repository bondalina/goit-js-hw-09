// const btnOpenModal = document.querySelector('.open-modal');
// const modal = document.querySelector('.modal');
// const btnCloseModal = document.querySelector('.close-modal');

// const closeModal = () => {
//   modal.classList.remove('open');
//   document.removeEventListener('keydown', closeModal);
// };

// btnOpenModal.addEventListener('click', () => {
//   modal.classList.add('open');
//   document.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       closeModal();
//     }
//   });
// });

// btnCloseModal.addEventListener('click', () => {
//   closeModal();
// });

// const btnAddToFav = document.querySelector('.add-to-fav');

// btnAddToFav.addEventListener('click', onBtnAdd);

// function onBtnAdd(event) {
//   const exercise = {};

//   return exercise;
// }

import axios from 'axios';

// axios
//   .get(
//     'https://energyflow.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10'
//   )
//   .then(response => {
//     const exercises = response.data.results;

//     // Створення та відображення карточок вправ
//     exercises.forEach(exercise => {
//       const cardHTML = `
//         <div class="exercise-card">
//           <h2>${exercise.name}</h2>
//           <p>Target: ${exercise.target}</p>
//           <p>Body part: ${exercise.bodyPart}</p>
//           <p>Equipment: ${exercise.equipment}</p>
//           <p>Popularity: ${exercise.popularity}</p>
//           <p>Burned calories: ${exercise.burnedCalories}</p>
//           <button class="open-modal"
//                   data-name="${exercise.name}"
//                   data-target="${exercise.target}"
//                   data-bodypart="${exercise.bodyPart}"
//                   data-equipment="${exercise.equipment}"
//                   data-popularity="${exercise.popularity}"
//                   data-burnedcalories="${exercise.burnedCalories}">
//             Open Modal
//           </button>
//         </div>
//       `;

//       // Додавання HTML карточки вправи до контейнера
//       document.getElementById('exercise-container').innerHTML += cardHTML;
//     });

//     // Додаємо обробник подій для кнопки "Open Modal"
//     const openModalButtons = document.querySelectorAll('.open-modal');
//     openModalButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const exerciseData = {
//           name: button.dataset.name,
//           target: button.dataset.target,
//           bodyPart: button.dataset.bodypart,
//           equipment: button.dataset.equipment,
//           popularity: button.dataset.popularity,
//           burnedCalories: button.dataset.burnedcalories,
//         };

//         // Відображення модального вікна з даними про вправу
//         displayExerciseModal(exerciseData);
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// // Масив для зберігання вправ
// const favoriteExercises = [];

// // Функція для відображення модального вікна з даними про вправу
// function displayExerciseModal(exerciseData) {
//   // Отримання модального вікна
//   const modal = document.getElementById('exercise-modal');

//   // Заповнення модального вікна даними про вправу
//   modal.innerHTML = `
//     <h2>${exerciseData.name}</h2>
//     <p>Target: ${exerciseData.target}</p>
//     <p>Body part: ${exerciseData.bodyPart}</p>
//     <p>Equipment: ${exerciseData.equipment}</p>
//     <p>Popularity: ${exerciseData.popularity}</p>
//     <p>Burned calories: ${exerciseData.burnedCalories}</p>
//     <button class="add-to-favorites">Add</button>
//   `;

//   // Відображення модального вікна
//   modal.style.display = 'block';

//   // Обробка кліків на кнопку "Add"
//   const addToFavoritesBtn = modal.querySelector('.add-to-favorites');
//   addToFavoritesBtn.addEventListener('click', () => {
//     // Додавання даних про вправу до масиву favoriteExercises
//     favoriteExercises.push(exerciseData);
//     // Збереження у локальному сховищі
//     localStorage.setItem(
//       'favoriteExercises',
//       JSON.stringify(favoriteExercises)
//     );
//     console.log('Added to favorites:', favoriteExercises);
//   });
// }

// yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

// // Масив для зберігання вправ
// let favoriteExercises =
//   JSON.parse(localStorage.getItem('favoriteExercises')) || [];

// // Отримання даних з сервера та відображення карточок вправ
// axios
//   .get(
//     'https://energyflow.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10'
//   )
//   .then(response => {
//     const exercises = response.data.results;

//     // Створення та відображення карточок вправ
//     exercises.forEach(exercise => {
//       const cardHTML = `
//         <div class="exercise-card">
//           <h2>${exercise.name}</h2>
//           <p>Target: ${exercise.target}</p>
//           <p>Body part: ${exercise.bodyPart}</p>
//           <p>Equipment: ${exercise.equipment}</p>
//           <p>Popularity: ${exercise.popularity}</p>
//           <p>Burned calories: ${exercise.burnedCalories}</p>
//           <button class="open-modal"
//                   data-id="${exercise._id}"
//                   data-name="${exercise.name}"
//                   data-target="${exercise.target}"
//                   data-bodypart="${exercise.bodyPart}"
//                   data-equipment="${exercise.equipment}"
//                   data-popularity="${exercise.popularity}"
//                   data-burnedcalories="${exercise.burnedCalories}">
//             Open Modal
//           </button>
//         </div>
//       `;

//       // Додавання HTML карточки вправи до контейнера
//       document.getElementById('exercise-container').innerHTML += cardHTML;
//     });

//     // Додаємо обробник подій для кнопки "Open Modal"
//     const openModalButtons = document.querySelectorAll('.open-modal');
//     openModalButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const exerciseData = {
//           id: button.dataset.id,
//           name: button.dataset.name,
//           target: button.dataset.target,
//           bodyPart: button.dataset.bodypart,
//           equipment: button.dataset.equipment,
//           popularity: button.dataset.popularity,
//           burnedCalories: button.dataset.burnedcalories,
//         };

//         // Відображення модального вікна з даними про вправу
//         displayExerciseModal(exerciseData);
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// // Функція для відображення модального вікна з даними про вправу
// function displayExerciseModal(exerciseData) {
//   // Отримуємо модальне вікно
//   const modal = document.getElementById('exercise-modal');

//   // Перевірка, чи об'єкт вже існує в масиві
//   const isAlreadyAdded = favoriteExercises.some(
//     exercise => exercise.id === exerciseData.id
//   );

//   // Заповнення модального вікна даними про вправу
//   modal.innerHTML = `
//     <h2>${exerciseData.name}</h2>
//     <p>Target: ${exerciseData.target}</p>
//     <p>Body part: ${exerciseData.bodyPart}</p>
//     <p>Equipment: ${exerciseData.equipment}</p>
//     <p>Popularity: ${exerciseData.popularity}</p>
//     <p>Burned calories: ${exerciseData.burnedCalories}</p>
//     ${
//       isAlreadyAdded
//         ? `<button class="remove-from-favorites">Remove from Favorites</button>`
//         : `<button class="add-to-favorites">Add to Favorites</button>`
//     }
//   `;

//   // Відображення модального вікна
//   modal.style.display = 'block';

//   // Обробка кліків на кнопку "Add" або "Remove"
//   const actionButton = modal.querySelector(
//     isAlreadyAdded ? '.remove-from-favorites' : '.add-to-favorites'
//   );
//   actionButton.addEventListener('click', () => {
//     if (isAlreadyAdded) {
//       // Видалення вправи зі списку улюблених
//       favoriteExercises = favoriteExercises.filter(
//         exercise => exercise.id !== exerciseData.id
//       );
//       // Оновлення локального сховища
//       localStorage.setItem(
//         'favoriteExercises',
//         JSON.stringify(favoriteExercises)
//       );
//       console.log('Removed from favorites:', favoriteExercises);
//     } else {
//       // Додавання вправи до списку улюблених
//       favoriteExercises.push(exerciseData);
//       // Оновлення локального сховища
//       localStorage.setItem(
//         'favoriteExercises',
//         JSON.stringify(favoriteExercises)
//       );
//       console.log('Added to favorites:', favoriteExercises);
//     }
//     // Закриття модального вікна
//     modal.style.display = 'none';
//   });
// }

// Додаємо обробник подій для кнопки "Add to favorites"
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-to-fav')) {
    const exerciseItem = event.target.closest('.item-favorites');
    if (exerciseItem && !exerciseItem.classList.contains('added')) {
      exerciseItem.classList.add('added');
      const exerciseContainer = document.getElementById('exercise-container');
      exerciseContainer.insertAdjacentHTML('beforeend', exerciseItem.outerHTML);
      const addToFavBtn = exerciseItem.querySelector('.add-to-fav');
      addToFavBtn.style.display = 'none';
      const removeFromFavBtn = exerciseItem.querySelector('.delete-from-fav');
      removeFromFavBtn.style.display = 'inline-block';
    }
  }
});

// Додаємо обробник подій для кнопки "Remove from favorites"
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-from-fav')) {
    const exerciseItem = event.target.closest('.item-favorites');
    if (exerciseItem) {
      exerciseItem.remove();
      const originalExerciseItem = document.querySelector(
        `.item-favorites[data-id="${exerciseItem.dataset.id}"]`
      );
      if (originalExerciseItem) {
        originalExerciseItem.classList.remove('added');
        const addToFavBtn = originalExerciseItem.querySelector('.add-to-fav');
        addToFavBtn.style.display = 'inline-block';
        const removeFromFavBtn =
          originalExerciseItem.querySelector('.delete-from-fav');
        removeFromFavBtn.style.display = 'none';
      }
    }
  }
});
