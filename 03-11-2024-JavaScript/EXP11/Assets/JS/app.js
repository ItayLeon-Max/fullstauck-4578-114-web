let num;
while(num !== 0){
    num = +prompt('Enter a number');
    if(num % 7 === 0){
        alert(`The number ${num} is divisible by 7`);
    } else {
        alert(`The number ${num} is not divisible by 7`);
    }
}