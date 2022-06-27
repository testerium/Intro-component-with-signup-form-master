const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === '') {
        setErrorFor(name, 'First Name cannot be empty');
    } else {
        setSuccessFor(name);
    }

    if(surnameValue === '') {
        setErrorFor(surname, 'Last Name cannot be empty');
    } else {
        setSuccessFor(surname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email')
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Last Name cannot be empty');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = "form_control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success";

    const small = formControl.querySelector('small');
    small.innerText = '';
}

function isEmail(email) {
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    return regExp.test(email);
}