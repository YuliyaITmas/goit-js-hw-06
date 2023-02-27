const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const listIngredientsEl = document.querySelector("ul#ingredients");
const ingredientsEl =[];
for (let ingredient of ingredients) {
  
  const itemIngredient = document.createElement("li");

  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add("item");
  ingredientsEl.push(itemIngredient);
}


listIngredientsEl.append(...ingredientsEl);

