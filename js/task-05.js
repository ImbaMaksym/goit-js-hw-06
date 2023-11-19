const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);

function onInput() {
  const input = nameInput.value;
  if (input === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = input;
  }
}
