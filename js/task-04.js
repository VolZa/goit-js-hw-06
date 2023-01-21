const refs = {
    counterActionEl: document.querySelector('#counter'),
    buttonDecrementClick: document.querySelector('[data-action="decrement"]'),
    // buttonIncrementClick: document.querySelector('[data-action="increment"]'),
    resValue: document.querySelector('#value'),
};



refs.counterActionEl.addEventListener('click', 
    (event) => {
        let i = Number(refs.resValue.textContent);
        (event.target === refs.buttonDecrementClick) ? i -= 1 : i += 1;
        refs.resValue.textContent = i;
    }
); 
// function onTargetButtonClick(event) {
//     let i = Number(refs.resValue.textContent);
//     (event.target === refs.buttonDecrementClick) ? i -= 1 : i += 1;
//     refs.resValue.textContent = i;
// }