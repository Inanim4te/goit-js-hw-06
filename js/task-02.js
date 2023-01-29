const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const arr = ingredients.map(ing => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ing;
  return item;
});

ingredientsList.append(...arr);
