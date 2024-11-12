const foo = ['hello', 'I', 'am', 'Inigo', 'Montoya'];
let phrase = "";
foo.forEach(item => {
    phrase += item + " ";
});
console.log(phrase);