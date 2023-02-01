const inputEl = document.querySelector('#validation-input');
const setInputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
    
    if (inputEl.value.length === setInputLength) {       
        inputEl.classList.add('valid')
    } else if (inputEl.value.length > 0) {
        inputEl.classList.add('invalid')  
    }
}
