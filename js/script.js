const form = document.getElementById('form');
const username = document.getElementById('userText')
const email = document.getElementById('emailText')
const password = document.getElementById('passwordText')
const confirmPassword = document.getElementById('confirmText');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInput();
});

function checkInput() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é obrigatório!');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'A senha deve ter no mínimo 8 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if (confirmValue === '') {
        setErrorFor(confirmPassword, 'A confirmação de senha é obrigatória!');
    } else if (confirmValue !== passwordValue) {
        setErrorFor(confirmPassword, 'As senhas não conferem!');
    } else {
        setSuccessFor(confirmPassword);
    }

    const formControl = document.querySelectorAll('.form-control');
    
    const formIsValid = [...formControl].every((formControls) => {
        return formControls.className === 'form-control success';
    });

    if (formIsValid) {
        console.log('O formulário é válido!');
    }
}

function setErrorFor(input, message) {
    const inputForm = input.parentElement;
    const small = inputForm.querySelector('small');

    // Add msg de erro
    small.innerText = message;

    // Add classe personalização de erro
    inputForm.className = 'form-control error';
}

function setSuccessFor(input) {
    const inputForm = input.parentElement;

    // Add classe personalização de erro
    inputForm.className = 'form-control success';
}
