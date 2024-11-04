alert("Hello, welcome to this calculator app!");
alert("Enter the operator: +, -, *, /, %, cos, sin, tan, log, sqrt^2, 2power, 3power, power");
const operator = prompt("Enter the operator: ");
let num1;
let num2;
let size = 0;
switch (operator) {
    case "+":
        let sum = 0;
        size = +prompt("How much numbers do you want to add?");
        let numbers = [size];
        for(let i = 0; i < size; i++){
            numbers[i] = +prompt("Enter the numbers: ");
            numbers.push(numbers[i]);
            sum += numbers[i];
        }
        alert(`The sum of the numbers is ${sum}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "-":
        size = +prompt("How much numbers do you want to subtract?");
        let numbers2 = [size];
        for(let i = 0; i < size; i++){
            numbers2[i] = +prompt("Enter the numbers: ");
        }
        if(size > 0){
            diff = numbers2[0];
            for(let i = 1; i < size; i++){
                diff -= numbers2[i];
            }
        }
        alert(`The difference of the numbers is ${diff}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "*":
        let product = 1;
        size = +prompt("How much numbers do you want to multiply?");
        let numbers3 = [size];
        for(let i = 0; i < size; i++){
            numbers3[i] = +prompt("Enter the numbers: ");
            numbers3.push(numbers3[i]);
            product *= numbers3[i];
        }
        alert(`The product of the numbers is ${product}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "/":
        num1 = +prompt("Enter the first number: ");
        num2 = +prompt("Enter the second number: ");
        if(num2 === 0) {
            alert("Cannot divide by zero");
            break;
        } else {
            alert(`${num1} / ${num2} ${num1 / num2}`);
            alert(`Thanks for using this calculator app!`);
            break;  
        }
    case "%":
        num1 = +prompt("Enter the first number: ");
        num2 = +prompt("Enter the second number: ");
        alert(`${num1} % ${num2} = ${num1 % num2}`);
        alert(`Thanks for using this calculator app!`);
        break; 
    case "cos":
        num1 = +prompt("Enter the number: ");
        alert(`cos(${num1}) = ${Math.cos(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;       
    case "sin":
        num1 = +prompt("Enter the number: ");
        alert(`sin(${num1}) = ${Math.sin(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "tan":
        num1 = +prompt("Enter the number: ");
        alert(`tan(${num1}) = ${Math.tan(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "log":
        num1 = +prompt("Enter the number: ");
        if(num1 <= 0) {
            alert("Invalid input for log");
            break;
        } else {
            alert(`log(${num1}) = ${Math.log(num1)}`);
            alert(`Thanks for using this calculator app!`);
            break;
        }
    case "sqrt^2":
        num1 = +prompt("Enter the number: ");
        if (num1 < 0) {
            alert("Invalid input for sqrt");
            break;
        } else {
            alert(`sqrt(${num1}) = ${Math.sqrt(num1)}`);
            alert(`Thanks for using this calculator app!`);
            break; 
        }
    case "2power":
        num1 = +prompt("Enter the number: ");
        alert(`${num1}^2 = ${Math.pow(num1, 2)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "3power":
        num1 = +prompt("Enter the number: ");
        alert(`${num1}^3 = ${Math.pow(num1, 3)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "power":
        num1 = +prompt("Enter the number: ");
        num2 = +prompt("Enter the power: ");
        alert(`${num1}^${num2} = ${Math.pow(num1, num2)}`);
        alert(`Thanks for using this calculator app!`);
        break;                       
    default:
        alert("Invalid operator");
        break;                  
}