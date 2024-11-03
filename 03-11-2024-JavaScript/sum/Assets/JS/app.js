let num;
let sum = 0;
while(num !== 0){
    num = +prompt('Enter a number');
    sum += num;
}
document.write(`Sum of numbers is ${sum}`);