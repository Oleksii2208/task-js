const formEl = document.querySelector(".login-form");
const btn = document.querySelector("button");
console.log(formEl);

formEl.addEventListener("submit", onFormChange);

function onFormChange(e) {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  console.log(email);
  const password = e.target.elements.password.value.trim();
  console.log(password);
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries);
  const data = {
    email: email,
    password: password,
  };
  console.log(data);

  e.target.reset();
}
