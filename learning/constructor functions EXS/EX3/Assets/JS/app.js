function LoginDetails(email, password) {
    this.email = email;
    this.password = password;

    this.getUserDetails = function() {
        return `Email: ${email}, Password: ${password}`;
    }
}

const data = new LoginDetails('itayleon81@walla.com', 'Shimshi81');
console.log(data.getUserDetails());