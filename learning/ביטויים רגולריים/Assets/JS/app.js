//Regular JS
//Syntax: /regular/
//Syntax: /regular/g with  modifier

//Regular Expression
let regular = /abc/;
let text = "abcHello World";
//01. Test Method
//Syntax: regular.test(text)
//Return: true or false
let result = regular.test(text);
console.log(result);
//a. with (^) to start with abc
//Syntax: /^abc/
regular = /^abc/;
text = "Hello Worldabc";
result = regular.test(text);
console.log(result);

//b. with ($) to end with abc
//Syntax: /abc$/
regular = /abc$/;
text = "Hello Worldabc";
result = regular.test(text);
console.log(result);

//c. wildcard character (.) to match any character
//Syntax: /a.c/ => aac, abc, acc, adc, a1c, a@c
regular = /^a.bc$/;
text = "a@bc";
result = regular.test(text);
console.log(result);

//d. with + to match one or more character 
//Syntax: /^ab.+c$/ => abc, abbc, abbbc, abbbbc
regular = /^ab.+c$/;
text = "abc";
result = regular.test(text);
console.log(result);

//e. with [] to match any character in the square bracket
//Syntax: /^a[bc]d$/ => abd, acd
regular = /^a[bc]d$/;
text = "aed";
result = regular.test(text);
console.log(result); //false

//f. with [a-z] to match any character in the range
//Syntax: /^a[a-z]d$/ => aad, abd, acd, azd
regular = /^a[a-z]d$/;
text = "aed";
result = regular.test(text);
console.log(result); //true

//g. with [a-zA-Z] to match any character in the range
//Syntax: /^a[a-zA-Z]d$/ => aad, abd, acd, azd, aAd, aBd, aCd, aZd
regular = /^a[a-zA-Z]d$/;
text = "aEd";
result = regular.test(text);
console.log(result); //true

//h. with [0-9] to match any digit in the range
//Syntax: /^a[0-9]d$/ => a0d, a1d, a2d, a3d, a4d, a5d, a6d, a7d, a8d, a9d
regular = /^a[0-9]+d$/;
text = "a78d";
result = regular.test(text);
console.log(result); //true

//i. with [^] to match any character not in the square bracket
//Syntax: /^a[^bc]d$/ => aad, azd, a1d, a@d
regular = /^a[^bc]d$/;
text = "abd";
result = regular.test(text);
console.log(result); //false

//j. with {n} to match exactly n character
//Syntax: /^a{3}d$/ => aaad
regular = /^a{3}d$/;
text = "aaad";
result = regular.test(text);
console.log(result); //true