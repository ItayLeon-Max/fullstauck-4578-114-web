//Strings
const messages = "Hello World";
console.log(messages);

//i can see the first character of the string
console.log(messages[0]);

//string is an array of characters

//i cant change the value of a string
messages[0] = "L";
console.log(messages);

//String methods and properties:
console.log(messages.toUpperCase()); //toUpperCase() method returns the calling string value converted to uppercase.
console.log(messages.toLowerCase()); //toLowerCase() method returns the calling string value converted to lowercase.
console.log(messages.indexOf("o"));//indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
console.log(messages.lastIndexOf("o"));//lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
console.log(messages.charAt(0));//charAt() method returns the specified character from a string.
console.log(messages.startsWith("H"));//startsWith() method determines whether a string begins with the characters of a specified string.
console.log(messages.endsWith("d"));//endsWith() method determines whether a string ends with the characters of a specified string.
console.log(messages.includes("l"));//includes() method determines whether one string may be found within another string.
console.log(messages.substring(0, 5));//substring() method returns the part of the string between the start and end indexes, or to the end of the string.
console.log(messages.slice(0, 5)); //slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(messages.split(" "));//split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
console.log(messages.replace("Hello", "Hi"));//replace() method returns a new string with some or all matches of a pattern replaced by a replacement.

const anotherMessage = "     hello       ";
console.log(anotherMessage);
// trim() method removes whitespace from both sides of a string and returns a new string without the whitespace.
console.log(anotherMessage.trim());
// length property returns the length of a string.
console.log(anotherMessage.trim().length);

console.log(messages.lastIndexOf("l"));
console.log(messages.lastIndexOf("orl"));

const longMessage = "Hello World. How are you?";
console.log(longMessage.substring(2, 5));

//find the index of the word "World" in the longMessage string and print the word "World" using the substring method.
const start = longMessage.indexOf("World");
const end = start + "World".length;
console.log(longMessage.substring(start, end));


