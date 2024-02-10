const url =
  'https://energyflow.b.goit.study/api/exercises?bodypart=waist&page=1&limit=10';

// Виконуємо запит за допомогою fetch
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Зберігаємо отримані дані у локальному сховищі
    localStorage.setItem('exerciseData', JSON.stringify(data));
    console.log('Дані збережено у локальному сховищі:', data);
  })
  .catch(error => {
    console.error('Виникла помилка:', error);
  });
