let num = +prompt('Enter a number');
let sum = 0;
while(num !== 0){
    sum += num;
    num = +prompt('Enter a number');
}
document.write(`Sum of numbers is ${sum}`);