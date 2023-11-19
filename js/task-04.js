const counter = document.querySelector("#counter");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let currentValue = 0;

incrementBtn.addEventListener("click", incrementClick);
decrementBtn.addEventListener("click", decrementClick);

function incrementClick() {
  currentValue += 1;
  value.textContent = currentValue;
}

function decrementClick() {
  currentValue -= 1;
  value.textContent = currentValue;
}
