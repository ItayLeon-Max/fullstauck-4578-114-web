//Storage - מאפשר לנו לשמור מידע בדפדפן
// lives as long as the browser is open

//1.Non persistent cookies - עוגיות לא קבועות

document.cookie = "team=dark";
//Syntax: document.cookie = "key=value";

console.log(document.cookie);

//-------------------

//2.Persistent cookies - עוגיות קבועות
const expiationDate = new Date(); // create a new date object
expiationDate.setUTCFullYear(expiationDate.getUTCFullYear() + 1); // set the expiration date to 1 year from now
document.cookie = `team=lightMode; expires=${expiationDate}`; // set the cookie with the expiration date

console.log(document.cookie);

//-------------------

//3. session storage - מאפשר לנו לשמור מידע בדפדפן עד סיום הסשן
// lives as long as the browser is open 

sessionStorage.setItem('font', 'david');
//Syntax: sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('font'));

//-------------------

//4. local storage - מאפשר לנו לשמור מידע בדפדפן לצמיתות
// lives even after the browser is closed

localStorage.setItem('font-size', '36');
//Syntax: localStorage.setItem('key', 'value');
console.log(localStorage.getItem('font-size'));

//-------------------


