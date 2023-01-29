function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}

// console.log(refs.inputEl);
// console.log(refs.createButtonEl);
// console.log(refs.destroyButtonEl);
// console.log(refs.boxesEl);

