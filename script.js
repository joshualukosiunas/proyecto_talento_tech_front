const form = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // toma los valores de los inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        // muestra error si el usuario esta vacio
        // agregar error class
        setErrorFor(username, 'El usuario no puede estar vacío');
    } else if(!isUsername(usernameValue)) {
        setErrorFor(username, 'El usuario no es valido, debe contener de 6 a 20 caracteres, letras y numeros');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        // muestra error si el email esta vacio
        // agregar error class
        setErrorFor(email, 'El email no puede estar vacío');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'El email no es valido');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        // muestra error si la contraseña esta vacía
        // agregar error class
        setErrorFor(password, 'La contraseña no puede estar vacía');
    } else if(!isPassword(passwordValue)) {
        setErrorFor(password, 'La contraseña no es valida, debe contener de 6 a 20 caracteres, al menos un numero, una letra minuscula y mayuscula');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        // muestra error si la contraseña esta vacía
        // agregar error class
        setErrorFor(password2, 'Debes reingresar la contraseña');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .register-form-control
    const small = formControl.querySelector('small');

    // agrega mensaje de error dentro de small
    small.innerText = message;

    // agrega una class de error
    formControl.className = 'register-form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement; // .register-form-control
    formControl.className = 'register-form-control success';
}

// funciones para definir los valores aceptados en los inputs

function isUsername(username) {
	return /^[0-9a-zA-Z].{5,20}$/.test(username);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
}