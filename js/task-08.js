const formEl = document.querySelector('.login-form');
const formDataEl = {
    email: '',
    password: '',
};

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
        } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Будьласка заповніть всі поля форми!");
    }
    formDataEl.email = email.value;
    formDataEl.password = password.value;
    email.value = '';
    email.password = '';

    // console.log(formDataEl);
    return formDataEl;
}


