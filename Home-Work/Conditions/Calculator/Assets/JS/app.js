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
        break;
    case "/":
        size = +prompt("How much numbers do you want to divide?");
        let numbers4 = [size];
        let quotient = numbers4[0];
        for(let i = 1; i < size; i++){
            numbers4[i] = +prompt("Enter the numbers: ");
            if(numbers4[i] === 0){
                alert("Cannot divide by zero");
                break;
            } else {
                quotient /= numbers4[i];
            }
        }
        alert(`The quotient of the numbers is ${quotient}`);
        break;
    case "%":
        num1 = +prompt("Enter the number: ");
        num2 = +prompt("Enter the modulo: ");
        alert(`${num1} % ${num2} = ${num1 % num2}`);
        break; 
    case "cos":
        num1 = +prompt("Enter the number: ");
        alert(`cos(${num1}) = ${Math.cos(num1)}`);
        break;       
    case "sin":
        num1 = +prompt("Enter the number: ");
        alert(`sin(${num1}) = ${Math.sin(num1)}`);
        break;
    case "tan":
        num1 = +prompt("Enter the number: ");
        alert(`tan(${num1}) = ${Math.tan(num1)}`);
        break;
    case "log":
        num1 = +prompt("Enter the number: ");
        if(num1 <= 0) {
            alert("Invalid input for log");
            break;
        } else {
            alert(`log(${num1}) = ${Math.log(num1)}`);
            break;
        }
    case "sqrt^2":
        num1 = +prompt("Enter the number: ");
        if (num1 < 0) {
            alert("Invalid input for sqrt");
            break;
        } else {
            alert(`sqrt(${num1}) = ${Math.sqrt(num1)}`);
            break; 
        }
    case "2power":
        num1 = +prompt("Enter the number: ");
        alert(`${num1}^2 = ${Math.pow(num1, 2)}`);
        break;
    case "3power":
        num1 = +prompt("Enter the number: ");
        alert(`${num1}^3 = ${Math.pow(num1, 3)}`);
        break;
    case "power":
        num1 = +prompt("Enter the number: ");
        num2 = +prompt("Enter the power: ");
        alert(`${num1}^${num2} = ${Math.pow(num1, num2)}`);
        break;                       
    default:
        alert("Invalid operator");
        break;                  
}
