const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const initFontSize = ( 
    Number(inputRangeEl.attributes.min.value) + Number(inputRangeEl.attributes.max.value)) / 2;
textEl.style.fontSize = initFontSize + 'px';

inputRangeEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px'; 
});

//Old version :
// const inputRangeEl = document.querySelector('#font-size-control');
// const textEl = document.querySelector('#text');
// const initFontSize = ( 
//     Number(inputRangeEl.attributes.min.value) + Number(inputRangeEl.attributes.max.value)) / 2;
// textEl.style.fontSize = initFontSize + 'px';
// inputRangeEl.addEventListener('input', onFontResize);

// function onFontResize(event) {
//     textEl.style.fontSize = event.currentTarget.value + 'px';
// }

