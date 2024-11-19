const testNameInputs = () => {
    const enterName = document.getElementById('enterName').value;
    const enterLastName = document.getElementById('enterLastName').value;
    const errorName = document.getElementById('errorName');
    const errorLastName = document.getElementById('errorLastName');

    if((!enterName && !enterLastName)) {
        errorName.innerHTML = 'Please enter your first name';
        errorName.style.color = 'red';
        errorLastName.innerHTML = 'Please enter your last name';
        errorLastName.style.color = 'red';
    } else {
        errorName.innerHTML = '';
        errorLastName.innerHTML = '';
    }

    if(enterName.length < 2 && enterLastName.length < 2) {
        errorName.innerHTML = 'First name must be at least 3 characters';
        errorName.style.color = 'red';
        errorLastName.innerHTML = 'Last name must be at least 3 characters';
        errorLastName.style.color = 'red';
    } else {
        errorName.innerHTML = '';
        errorLastName.innerHTML = '';
        alert('You have successfully registered');
        alert(`your name is ${enterName} ${enterLastName}`);
    }
}
