const enterDetails = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
}

const testDetails = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const textError = document.getElementById('textError');

    if(!firstName || !lastName || !email){
        textError.innerHTML = 'One of the details is incorrect!';
        textError.style.color = 'red';
    } else if(firstName.length < 2 || lastName.length < 2 || email.length < 2){
        textError.innerHTML = 'Incorrect details: You cannot enter less than 2 characters at least!';
        textError.style.color = 'red';
    } else if(firstName.length > 30 || lastName.length > 30 || email.length > 30){
        textError.innerHTML = 'Incorrect details: You cannot enter more than 30 characters at most!';
        textError.style.color = 'red';
    } else {
        textError.innerHTML = ""
        enterDetails();
    }
}