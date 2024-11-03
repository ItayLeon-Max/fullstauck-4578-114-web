// input: 6 5 3 9 if (0) print avg of numbers with not 0
let num;
let sum = 0;
let count = 0;
let avg = 0;
while(num !== 0){
    num = +prompt("Enter a number: ");
    sum += num;
    count++;
}
avg = sum / (count - 1);
document.write(`Average of numbers: ${avg}`);