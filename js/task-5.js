const textElem = document.querySelector("p .color");
const btnElem = document.querySelector(".change-color");
const body = document.querySelector("body");

console.log(body);
console.log(btnElem);

btnElem.addEventListener("click", onBtnChange);

function onBtnChange() {
  textElem.textContent = getRandomHexColor();
  body.style.backgroundColor = `${textElem.textContent}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
