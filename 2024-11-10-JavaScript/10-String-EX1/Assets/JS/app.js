const text = prompt('Enter a text');
text = text.trim();
//input: hello my name is itay
//output: hello itay
const firstWordEnd = text.indexOf(' ');
const firstEndWord = text.substring(0, firstWordEnd);
const lastWordStart = text.lastIndexOf(' ') + 1;
const lastWord = text.substring(lastWordStart);
const newText = firstEndWord + ' ' + lastWord;
console.log(newText);
