const generatePassword = (length, allowSpecialChars) => {
    let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    if (allowSpecialChars) possibleChars += specialChars;

    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomIndex];
    }
    return password;
}

module.exports = { generatePassword };

