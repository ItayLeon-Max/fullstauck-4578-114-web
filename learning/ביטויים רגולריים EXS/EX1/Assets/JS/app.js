const errorMesseagesOfPassword = () => {
    const regularExpression = /^([A-Z]).+([a-z]).+([0-9])([@!]$)/;
    const password = document.getElementById('password').value;
    const errorMess = document.getElementById('error');
    if(password.match(regularExpression)){
        errorMess.innerHTML = "Password is valid";
        errorMess.style.color = "green";
    } else {
        const error = new Error("Password is invalid");
        errorMess.innerHTML = error.message;
        errorMess.style.color = "red";
        throw error;
    } 
} 
