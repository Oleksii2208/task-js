const refs = {
  textElem: document.querySelector("p .color"),
  btnElem: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.btnElem.addEventListener("click", onBtnChange);

function onBtnChange() {
  refs.textElem.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = `${refs.textElem.textContent}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
