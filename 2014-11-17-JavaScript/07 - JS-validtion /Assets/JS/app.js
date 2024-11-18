//validation for the form with JavaScript

const validate = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const emailError = document.getElementById('emailErrorMessages');
    const passwordError = document.getElementById('passwordErrorMessages');

    const email = emailInput.value;
    const password = passwordInput.value;
    const age = ageInput.value;

    if(!email){
        emailError.innerHTML = 'Email is required';
    }

    if(password.length < 8){
        passwordErrorMessages.innerHTML = 'Password must be at least 8 characters';
    }

    if(!age){
        alert('age is required');
    }
};