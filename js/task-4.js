const refs = {
  form: document.querySelector(".login-form"),
  btn: document.querySelector("button"),
  dataListElem: document.querySelector(".js-container"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  //   console.log(email);
  const password = e.target.elements.password.value.trim();
  //   console.log(password);
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const data = {
    email: email,
    password: password,
  };
  console.log(data);

  //   const markup = dataTemplate(data);
  //   refs.dataListElem.insertAdjacentHTML("beforeend", markup);

  e.target.reset(); // Очищення полів форми
}

//! e.target - це елемент на якому сталась подія(наприклад тут form)

//! Спосіб зібрати всі поля в об'єкт:
// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);
// }

//! Або ще варіант, чи коли я хочу взяти не всі поля
// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };
//   console.log(data);
// }

//! FormData - це наш помічник, якому я кажу звідки тягати дані з якої форми

// function dataTemplate(data) {
//   return `<div>
//       <p>${data.email}</p>
//       <p>${data.password}</p>
//     </div>`;
// }
