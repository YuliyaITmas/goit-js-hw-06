const counter = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

const decrementBtn = counter.firstElementChild;
const incrementBtn = counter.lastElementChild;

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    
    counterValue += 1;
    valueEl.textContent = counterValue;
    
});