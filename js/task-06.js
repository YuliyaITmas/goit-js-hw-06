const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.trim().length);
  if (
    Number(event.currentTarget.value.trim().length) === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid")|| inputEl.classList.replace("invalid", "valid") ;
    
  } else {
    inputEl.classList.add("invalid");
  }
});
