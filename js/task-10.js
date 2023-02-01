function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}
let insertingElements = [];

refs.createButtonEl.addEventListener("click", createElements);
refs.destroyButtonEl.addEventListener("click", deleteElements);

function createElements(event) {
  const numberElements = Number(refs.inputEl.value);
  const newElements = createBoxes(numberElements);
  refs.boxesEl.append(...newElements);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const insElement = document.createElement('div');
    insElement.style.width = String(size) + 'px';
    insElement.style.height = String(size) + 'px';
    insElement.style.backgroundColor = getRandomHexColor();
    insertingElements.push(insElement);
  }
  return insertingElements;
}

function deleteElements(event) {
  const count = insertingElements.length -1;
  
  for (let elem = count; elem >= 0; elem -= 1) {
    insertingElements[elem].remove();
  }
  insertingElements = [];
}
