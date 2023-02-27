
const formEl = document.querySelector(".login-form")


formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value.trim() === "" ) {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value.trim()}`);
  event.currentTarget.reset();
 

}
