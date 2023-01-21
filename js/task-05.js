const refs = {
    inputEl: document.querySelector('#name-input'), 
    outputEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputInput);

function onInputInput(event) {
    (event.currentTarget.value === '') 
        ? refs.outputEl.textContent = 'Anonymous' 
        : refs.outputEl.textContent = event.currentTarget.value
}
