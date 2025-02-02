const generatePassword = (length) => {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return password;
}

module.exports = { generatePassword };

