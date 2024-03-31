import axios from 'axios';
import PerfectScrollbar from 'perfect-scrollbar';

const container = document.querySelector('.list-favorites');
const ps = new PerfectScrollbar(container);

// // Додаємо обробник подій для кнопки "Add to favorites"
// document.addEventListener('click', function (event) {
//   if (event.target.classList.contains('add-to-fav')) {
//     const exerciseItem = event.target.closest('.item-favorites');
//     if (exerciseItem && !exerciseItem.classList.contains('added')) {
//       exerciseItem.classList.add('added');
//       const exerciseContainer = document.getElementById('exercise-container');
//       exerciseContainer.insertAdjacentHTML('beforeend', exerciseItem.outerHTML);
//       const addToFavBtn = exerciseItem.querySelector('.add-to-fav');
//       addToFavBtn.style.display = 'none';
//       const removeFromFavBtn = exerciseItem.querySelector('.delete-from-fav');
//       removeFromFavBtn.style.display = 'inline-block';
//     }
//   }
// });

// // Додаємо обробник подій для кнопки "Remove from favorites"
// document.addEventListener('click', function (event) {
//   if (event.target.classList.contains('delete-from-fav')) {
//     const exerciseItem = event.target.closest('.item-favorites');
//     if (exerciseItem) {
//       exerciseItem.remove();
//       const originalExerciseItem = document.querySelector(
//         `.item-favorites[data-id="${exerciseItem.dataset.id}"]`
//       );
//       if (originalExerciseItem) {
//         originalExerciseItem.classList.remove('added');
//         const addToFavBtn = originalExerciseItem.querySelector('.add-to-fav');
//         addToFavBtn.style.display = 'inline-block';
//         const removeFromFavBtn =
//           originalExerciseItem.querySelector('.delete-from-fav');
//         removeFromFavBtn.style.display = 'none';
//       }
//     }
//   }
// });

// https://energyflow.b.goit.study/api/${type}

function getApiInfo({ filter, page = 1, limit = 12, type, ...params }) {
  return axios.get(`https://energyflow.b.goit.study/api/${type}`, {
    params: {
      ...params,
      filter,
      page,
      limit,
    },
  });
}
getApiInfo();
function createCardMarkup({ name, target, bodyPart, burnedCalories }) {
  return `
    <div class="card">
      <h2>${name}</h2>
      <p>Target: ${target}</p>
      <p>Body Part: ${bodyPart}</p>
      <p>Burned Calories: ${burnedCalories}</p>
    </div>
  `;
}
createCardMarkup();

async function displayCards() {
  try {
    const response = await fetchDataFromApi();
    const data = response.data;

    if (data && data.results && Array.isArray(data.results)) {
      data.results.forEach(result => {
        // Тут ваш код для створення та відображення карток з даними з кожного об'єкта result
      });
    } else {
      console.error('No results found or invalid data format');
    }
  } catch (error) {
    console.error('Error displaying cards:', error);
  }
}

displayCards();
