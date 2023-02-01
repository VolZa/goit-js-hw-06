const refs = {
    buttonDecrementClick: document.querySelector('[data-action="decrement"]'),
    buttonIncrementClick: document.querySelector('[data-action="increment"]'),
    resValue: document.querySelector('#value'),
};

let counterValue = 0;

refs.buttonDecrementClick.addEventListener('click', 
    (event) => {
        counterValue -= 1;
        refs.resValue.textContent = counterValue;
    }
); 
refs.buttonIncrementClick.addEventListener('click', 
    (event) => {
        counterValue += 1;
        refs.resValue.textContent = counterValue;
    }
); 

//Optimized version:
// const refs = {
//     counterActionEl: document.querySelector('#counter'),
//     buttonDecrementClick: document.querySelector('[data-action="decrement"]'),
//     resValue: document.querySelector('#value'),
// };
// refs.counterActionEl.addEventListener('click', 
//     (event) => {
//         let i = Number(refs.resValue.textContent);
//         (event.target === refs.buttonDecrementClick) ? i -= 1 : i += 1;
//         refs.resValue.textContent = i;
//     }
// ); 