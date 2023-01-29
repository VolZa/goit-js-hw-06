function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  bodyEl:      document.querySelector('body'),
  buttonEl:    document.querySelector('.change-color'), 
  spanColorEl: document.querySelector('.color'),
} 

refs.buttonEl.addEventListener("click", setBgColor);

function setBgColor(event) {
  const bgColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = bgColor;
  refs.spanColorEl.textContent =  bgColor;
}
