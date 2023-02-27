const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", oninputChange);

function oninputChange(event) {
  outputEl.textContent = event.currentTarget.value; 
   
 if (event.currentTarget.value.trim().length === 0) {
    outputEl.textContent = "Anonymous";
 }
}
