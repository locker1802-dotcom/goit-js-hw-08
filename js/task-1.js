// Шаг 1: находим сам список ul#categories
const categoriesList = document.querySelector('ul#categories');

// Шаг 2: находим все li.item внутри него
const items = categoriesList.querySelectorAll('.item');

// Шаг 3: выводим количество категорий
console.log(`Number of categories: ${items.length}`);

// Шаг 4: перебираем каждую категорию
items.forEach(item => {
  // 4.1: находим заголовок и берём его текст
  const title = item.querySelector('h2').textContent;

  // 4.2: находим вложенный список и считаем его детей
  const count = item.querySelector('ul').children.length;

  // 4.3: выводим обе строки
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
