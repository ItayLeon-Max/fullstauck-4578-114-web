let num;
while(num !== 0){
    num = +prompt("Enter a number: ");
    const result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    document.write(`The number ${num} is ${result}<br>`);
}