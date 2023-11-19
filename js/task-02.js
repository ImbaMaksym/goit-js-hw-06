const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const arr = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("item");
  item.textContent = ingredient;
  item.classList.add("item");
  arr.push(item);
});

ingredientsList.append(...arr);
