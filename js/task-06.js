const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);
console.log(inputEl.textContent.length);
console.log(inputLength);
inputEl.addEventListener('blur', onBlur);
inputEl.borderColor = 'green';
function onBlur(event) {
    if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
    }
    if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
    }
    
    if (inputEl.value.length === inputLength) {
        // inputEl.style.borderColor = 'green';
       
        inputEl.classList.add('valid')
    } else if (inputEl.value.length > 0) {
      inputEl.classList.add('invalid')  
        //  inputEl.style.borderColor = '#ff0000'; 
    }
}
