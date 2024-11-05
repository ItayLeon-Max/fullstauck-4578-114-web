//Created by: Itay Leon
//Date: 2021-09-30
//Description: This is a simple calculator app that can perform basic arithmetic operations and some scientific operations.
//The user is prompted to enter the operator and the numbers to perform the operation.
//The user can perform the following operations: addition, subtraction, multiplication, division, modulo, cosine, sine, tangent, logarithm, square root, square, cube, and power, factorial, and a system of linear equations.
//The user can enter the operator and the numbers to perform the operation.
//*******************************************************************************

alert("Hello, welcome to this calculator app!");
alert("Enter the operator: +, -, *, /, %, cos, sin, tan, log, sqrt^2, 2power, 3power, power, !, A system of linear equations(LE), quadratic equation(QE), Third degree equation(TE)");
const operator = prompt("Enter the operator: ");
let num1;
let num2;
let size = 0;
switch (operator) {
    case "+":
        let sum = 0;
        size = +prompt("How much numbers do you want to add?");
        let numbersSum = [size];
        for(let i = 0; i < size; i++){
            numbersSum[i] = +prompt("Enter the numbers: ");
            numbersSum.push(numbersSum[i]);
            sum += numbersSum[i];
        }
        alert(`The sum of the numbers is ${sum}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "-":
        size = +prompt("How much numbers do you want to subtract?");
        let numbersDiff = [size];
        for(let i = 0; i < size; i++){
            numbersDiff[i] = +prompt("Enter the numbers: ");
        }
        if(size > 0){
            diff = numbersDiff[0];
            for(let i = 1; i < size; i++){
                diff -= numbersDiff[i];
            }
        }
        alert(`The difference of the numbers is ${diff}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "*":
        let product = 1;
        size = +prompt("How much numbers do you want to multiply?");
        let numbersMultiply = [size];
        for(let i = 0; i < size; i++){
            numbersMultiply[i] = +prompt("Enter the numbers: ");
            numbersMultiply.push(numbers3[i]);
            product *= numbersMultiply[i];
        }
        alert(`The product of the numbers is ${product}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "/":
        let divideProduct;
        size = +prompt("How much numbers do you want to divide?");
        let numbersDivide = [size];
        for(let i = 0 ; i < size ; i++){
            numbersDivide[i] = +prompt("Enter the numbers: ");
        }
        if(size > 1){
            divideProduct = numbersDivide[0];
            for(let i = 1 ; i < size ; i++){
                divideProduct /= numbersDivide[i];
            }
            let answer = numbersDivide[size - 1] === 0 ? "You can't divide by zero." : `The result of the division is ${divideProduct}`;
            alert(answer);
        } else {
            alert("No numbers to divide.");
        }
        alert(`Thanks for using this calculator app!`);
        break;
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
    case "!":
        num1 = +prompt("Enter the number: ");
        let factorial = 1;
        if(num1 < 0) {
            alert("Invalid input for factorial");
            break;
        } else {
            for(let i = 1; i <= num1; i++){
                factorial *= i;
            }
            alert(`${num1}! = ${factorial}`);
            alert(`Thanks for using this calculator app!`);
            break;
        }   
    case "LE":
    case "le":    
        let a1 = +prompt("Enter the first coefficient of x: ");
        let b1 = +prompt("Enter the second coefficient of x: ");
        let c1 = +prompt("Enter the constant of the first equation: ");
        let a2 = +prompt("Enter the first coefficient of y: ");
        let b2 = +prompt("Enter the second coefficient of y: ");
        let c2 = +prompt("Enter the constant of the second equation: ");
        let det = a1 * b2 - a2 * b1;
        let detX = c1 * b2 - c2 * b1;
        let detY = a1 * c2 - a2 * c1;
        if(det === 0) {
            alert("The system of linear equations has no solution.");
        } else {
            let x = detX / det;
            let y = detY / det;
            alert(`The solution of the system of linear equations is x = ${x} and y = ${y}`);
        }
        alert(`Thanks for using this calculator app!`);
        break; 
    case "QE":
    case "qe":    
        let a = +prompt("Enter the coefficient of x^2: ");
        let b = +prompt("Enter the coefficient of x: ");
        let c = +prompt("Enter the constant: ");
        let discriminant = b * b - 4 * a * c;
        if(discriminant > 0) {
            let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            alert(`The solutions of the quadratic equation are x1 = ${x1} and x2 = ${x2}`);
        } else if(discriminant === 0) {
            let x = -b / (2 * a);
            alert(`The solution of the quadratic equation is x = ${x}`);
        } else {
            let realPart = -b / (2 * a);
            let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            let x1 = `${realPart} + ${imaginaryPart}i`;
            let x2 = `${realPart} - ${imaginaryPart}i`;
            alert(`The solutions of the quadratic equation are x1 = ${x1} and x2 = ${x2}`);
        }
        alert(`Thanks for using this calculator app!`);
        break;   
    case "TE":
    case "te":    
         a = +prompt("Enter the coefficient of x^3: ");
         b = +prompt("Enter the coefficient of x^2: ");
         c = +prompt("Enter the coefficient of x: ");
        let d = +prompt("Enter the constant: ");
        let root1;
        let root2;
        let root3;
        discriminant = b * b - 3 * a * c;
        let temp1 = (3 * a * c - b * b) / (3 * a * a);
        let temp2 = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
        let temp3 = temp2 * temp2 / 4 + temp1 * temp1 * temp1 / 27;
        let temp4 = Math.sqrt(-temp3);
        let temp5 = Math.acos(-temp2 / (2 * temp4));
        let temp6 = Math.pow(temp4, 1/3);
        root1 = 2 * temp6 * Math.cos(temp5 / 3) - b / (3 * a);
        root2 = 2 * temp6 * Math.cos((temp5 + 2 * Math.PI) / 3) - b / (3 * a);
        root3 = 2 * temp6 * Math.cos((temp5 + 4 * Math.PI) / 3) - b / (3 * a);
        alert(`The solutions of the third degree equation are x1 = ${root1}, x2 = ${root2}, and x3 = ${root3}`);
        alert(`Thanks for using this calculator app!`);
        break;                   
    default:
        alert("Invalid operator");
        break;                  
}