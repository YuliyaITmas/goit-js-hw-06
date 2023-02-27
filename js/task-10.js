function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const getBoxes = (amount) => {
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i += 1) {
    refs.boxes.insertAdjacentHTML("afterbegin", `<div data-box></div>`);
    const containers = document.querySelector("[data-box]");
    containers.style.cssText = `width: ${(width += 10)}px; height: ${(height += 10)}px; background-color: ${getRandomHexColor()}`;
  }
};
const handler = (event) => {
  getBoxes(refs.input.value);
};
refs.createButton.addEventListener("click", handler);



refs.destroyButton.addEventListener("click", event => {
  refs.boxes.innerHTML = "";
});


