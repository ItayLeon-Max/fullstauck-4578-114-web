const fixNum = (num, digits) => num.toFixed(digits);

const work = () => {
    const numberOfDigits = +prompt('Enter the number of digits after the decimal point: ');
    console.log('hello1');
    const pi = fixNum(Math.PI, numberOfDigits);   
    console.log('hello2');
    console.log(pi); 
}

try {
    work();
} catch (error) { // the exception in fixNum, then was thrown to work function and then caught here in the main code block.
    console.log(error.message);
}
