const refs = {
  input: document.querySelector("#name-input"),
  valueInput: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
function onInputChange(e) {
  const value = e.target.value.trim();
  refs.valueInput.textContent = value || "Anonymous";
}
