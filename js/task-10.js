const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}
const insertElements = [];
refs.createButtonEl.addEventListener("click", createElements);
refs.destroyButtonEl.addEventListener("click", deleteElements);

function createElements(event) {
  const numberElements = Number(refs.inputEl.value);
  const newElements = createBoxes(numberElements);
  console.log(newElements);
  refs.boxesEl.append(...newElements);
}

function createBoxes(amount) {  
  for (let i = 0; i < amount; i += 1) {
    const insElement = document.createElement('div');
    console.log(insElement);
    insertElements.push(insElement);
  }
  return insertElements;
}

function deleteElements(event) {
  const childBoxesEl = refs.boxesEl.childNodes;
  const count = childBoxesEl.length -1;
  for (let elem = count; elem >= 0; elem -= 1) {
    childBoxesEl[elem].remove();
  }  
  console.log(childBoxesEl);
}