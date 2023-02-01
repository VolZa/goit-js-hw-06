const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredientsElements = arrIngredients => {
  return arrIngredients.map(
    item => {
      const ingredientEl = document.createElement('li');
      ingredientEl.textContent = item;
      ingredientEl.className = 'item';
      return ingredientEl;
  });
}

const ingredientsElements = makeIngredientsElements(ingredients);

ingredientsEl.append(...ingredientsElements);

// Another option:
// const ingredientsElements = ingredients.map(item => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = item;
//   ingredientEl.className = 'item';
//   return ingredientEl;
// });

// const ingredientsElements = [];
// for (let item of ingredients) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = item;
//   ingredientEl.className = 'item';
//   ingredientsElements.push(ingredientEl);
// }