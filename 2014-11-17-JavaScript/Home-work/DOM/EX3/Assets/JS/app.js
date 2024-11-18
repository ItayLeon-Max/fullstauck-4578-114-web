const sendEmail = () => {
    const email = document.getElementById("getEmail").value;
    if(!email){
        alert("Please enter your email address");
    } else {
        alert("Thank you for subscribing to our newsletter");
    }
}

