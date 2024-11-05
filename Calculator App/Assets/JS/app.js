//Created by: Itay Leon
//Date: 2024-11-04
//Description: This is a simple calculator app that can perform basic arithmetic operations and some scientific operations.
//The user is prompted to enter the operator and the numbers to perform the operation.
//The user can perform the following operations: addition, subtraction, multiplication, division, modulo, cosine, sine, tangent, logarithm, square root, square, cube, and power
//, factorial, and a system of linear equations, quadratic equation, and third degree equation.
//The user can enter the operator and the numbers to perform the operation.
//*******************************************************************************

// add input this body to get the operator and the numbers to perform the operation
// let input = document.createElement("input");
// input.setAttribute("type", "text");
// document.body.appendChild(input);
// let button = document.createElement("button");
// button.innerHTML = "Submit";
// document.body.appendChild(button);
let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);
resultDiv.innerText = 0;
//im wont the user to enter the operator and the numbers in input and click the button to get the result
//and the result will be displayed in div

 
alert("Hello, welcome to this calculator app!");
alert("Enter the operator: +, -, *, /, %, cos, sin, tan, log, sqrt^2, 2power, 3power, power, !, A system of linear equations(LE), quadratic equation(QE), Third degree equation(TE)");
const operator = prompt("Enter the operator: ");
let num1;
let num2;
let size = 0;
//this will check the operator entered by the user
switch (operator) {
    case "+":
        let sum = 0;
        size = +prompt("How much numbers do you want to add?");
        let numbersSum = [size];
        //this loop will prompt the user to enter the numbers to add
        for(let i = 0; i < size; i++){
            //this will calculate the sum of the numbers
            numbersSum[i] = +prompt("Enter the numbers: ");
            numbersSum.push(numbersSum[i]);
            sum += numbersSum[i];
        }
        resultDiv.innerText = `The sum of the numbers is ${sum}`;
        alert(`Thanks for using this calculator app!`);
        break;
    case "-":
        size = +prompt("How much numbers do you want to subtract?");
        let numbersDiff = [size];
        //this loop will prompt the user to enter the numbers to subtract
        for(let i = 0; i < size; i++){
            //this will calculate the difference of the numbers
            numbersDiff[i] = +prompt("Enter the numbers: ");
        }
        if(size > 0){
            //this if statement will check if there are numbers to subtract
            diff = numbersDiff[0];
            for(let i = 1; i < size; i++){
                //this loop will subtract the numbers
                diff -= numbersDiff[i];
            }
        }
        resultDiv.innerText = `The difference of the numbers is ${diff}`;
        alert(`Thanks for using this calculator app!`);
        break;
    case "*":
        let product = 1;
        size = +prompt("How much numbers do you want to multiply?");
        //this loop will prompt the user to enter the numbers to multiply
        let numbersMultiply = [size];
        for(let i = 0; i < size; i++){
            //this will calculate the product of the numbers
            numbersMultiply[i] = +prompt("Enter the numbers: ");
            product *= numbersMultiply[i];
        }
        resultDiv.innerText = `The product of the numbers is ${product}`;
        alert(`Thanks for using this calculator app!`);
        break;
    case "/":
        let divideProduct;
        size = +prompt("How much numbers do you want to divide?");
        let numbersDivide = [size];
        for(let i = 0 ; i < size ; i++){
            //this loop will prompt the user to enter the numbers to divide
            numbersDivide[i] = +prompt("Enter the numbers: ");
        }
        if(size > 1){
            //this if statement will check if there are numbers to divide
            divideProduct = numbersDivide[0];
            for(let i = 1 ; i < size ; i++){
                //this loop will divide the numbers
                divideProduct /= numbersDivide[i];
            }
            let answer = numbersDivide[size - 1] === 0 ? "You can't divide by zero." : `The result of the division is ${divideProduct}`;
            resultDiv.innerText = answer;
        } else {
            //this else statement will alert the user if there are no numbers to divide
            alert("No numbers to divide.");
        }
        alert(`Thanks for using this calculator app!`);
        break;
    case "%":
        //this case will calculate the modulo of two numbers
        num1 = +prompt("Enter the first number: ");
        num2 = +prompt("Enter the second number: ");
        //this will calculate the modulo of the two numbers
        resultDiv.innerText = (`${num1} % ${num2} = ${num1 % num2}`);
        alert(`Thanks for using this calculator app!`);
        break; 
    case "cos":
        //this case will calculate the cosine of a number
        num1 = +prompt("Enter the number: ");
        //this will calculate the cosine of the number
        resultDiv.innerText = (`cos(${num1}) = ${Math.cos(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;       
    case "sin":
        //this case will calculate the sine of a number
        num1 = +prompt("Enter the number: ");
        //this will calculate the sine of the number
        resultDiv.innerText = (`sin(${num1}) = ${Math.sin(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "tan": 
        //this case will calculate the tangent of a number
        num1 = +prompt("Enter the number: ");
        //this will calculate the tangent of the number
        resultDiv.innerText = (`tan(${num1}) = ${Math.tan(num1)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "log":
        //this case will calculate the logarithm of a number
        num1 = +prompt("Enter the number: ");
        if(num1 <= 0) {
            //this will alert the user if the input is invalid
            resultDiv.innerText = ("Invalid input for log");
            resultDiv.style.color = "red";
            resultDiv.style.fontSize = "20px";
            break;
        } else {
            //this will calculate the logarithm of the number
            resultDiv.innerText = (`log(${num1}) = ${Math.log(num1)}`);
            alert(`Thanks for using this calculator app!`);
            break;
        }
    case "sqrt^2":
        //this case will calculate the square root of a number
        num1 = +prompt("Enter the number: ");
        if (num1 < 0) {
            //this will alert the user if the input is invalid
            resultDiv.innerText = ("Invalid input for sqrt");
            resultDiv.style.color = "red";
            resultDiv.style.fontSize = "20px";
            break;
        } else {
            //this will calculate the square root of the number
            resultDiv.innerText = (`sqrt(${num1}) = ${Math.sqrt(num1)}`);
            alert(`Thanks for using this calculator app!`);
            break; 
        }
    case "2power":
        num1 = +prompt("Enter the number: ");
        //this will calculate the square of the number
        resultDiv.innerText = (`${num1}^2 = ${Math.pow(num1, 2)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "3power":
        num1 = +prompt("Enter the number: ");
        //this will calculate the cube of the number
        resultDiv.innerText = (`${num1}^3 = ${Math.pow(num1, 3)}`);
        alert(`Thanks for using this calculator app!`);
        break;
    case "power":
        num1 = +prompt("Enter the number: ");
        num2 = +prompt("Enter the power: ");
        //this will calculate the power of the number
        resultDiv.innerText = (`${num1}^${num2} = ${Math.pow(num1, num2)}`);
        alert(`Thanks for using this calculator app!`);
        break; 
    case "!":
        //this case will calculate the factorial of a number
        num1 = +prompt("Enter the number: ");
        //this will calculate the factorial
        let factorial = 1;
        if(num1 < 0) {
            //this will alert the user if the input is invalid
            resultDiv.innerText = ("Invalid input for factorial");
            resultDiv.style.color = "red";
            resultDiv.style.fontSize = "20px";
            break;
        } else {
            //this will calculate the factorial of the number
            for(let i = 1; i <= num1; i++){
                factorial *= i;
            }
            //this will alert the user the factorial of the number
            resultDiv.innerText = (`${num1}! = ${factorial}`);
            alert(`Thanks for using this calculator app!`);
            break;
        }   
    case "LE":
    case "le":    
        //this case will solve a system of linear equations
        let a1 = +prompt("Enter the first coefficient of x: ");
        let b1 = +prompt("Enter the second coefficient of x: ");
        let c1 = +prompt("Enter the constant of the first equation: ");
        let a2 = +prompt("Enter the first coefficient of y: ");
        let b2 = +prompt("Enter the second coefficient of y: ");
        let c2 = +prompt("Enter the constant of the second equation: ");
        //this will calculate the determinant
        let det = a1 * b2 - a2 * b1;
        let detX = c1 * b2 - c2 * b1;
        let detY = a1 * c2 - a2 * c1;
        //this will check if the determinant is equal to zero
        if(det === 0) {
            //this will alert the user if the determinant is equal to zero
            resultDiv.innerText = ("The system of linear equations has no solution.");
            resultDiv.style.color = "red";
            resultDiv.style.fontSize = "20px";
        } else {
            //this will calculate the values of x and y
            let x = detX / det;
            let y = detY / det;
            resultDiv.innerText = (`The solution of the system of linear equations is x = ${x} and y = ${y}`);
        }
        alert(`Thanks for using this calculator app!`);
        break; 
    case "QE":
    case "qe":   
        //this case will solve a quadratic equation
        let a = +prompt("Enter the coefficient of x^2: ");
        let b = +prompt("Enter the coefficient of x: ");
        let c = +prompt("Enter the constant: ");
        //this will calculate the discriminant
        let discriminant = b * b - 4 * a * c;
        //this will check the value of the discriminant
        if(discriminant > 0) {
            //this will calculate the values of x1 and x2
            let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultDiv.innerText = (`The solutions of the quadratic equation are x1 = ${x1} and x2 = ${x2}`);
        } else if(discriminant === 0) {
            //this will calculate the value of x
            let x = -b / (2 * a);
            resultDiv.innerText = (`The solution of the quadratic equation is x = ${x}`);
        } else {
            //this will calculate the real and imaginary parts of x1 and x2
            let realPart = -b / (2 * a);
            let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            let x1 = `${realPart} + ${imaginaryPart}i`;
            let x2 = `${realPart} - ${imaginaryPart}i`;
            resultDiv.innerText = (`The solutions of the quadratic equation are x1 = ${x1} and x2 = ${x2}`);
        }
        alert(`Thanks for using this calculator app!`);
        break;   
    case "TE":
    case "te":    
        //this case will solve a third degree equation
         a = +prompt("Enter the coefficient of x^3: ");
         b = +prompt("Enter the coefficient of x^2: ");
         c = +prompt("Enter the coefficient of x: ");
        let d = +prompt("Enter the constant: ");
        //this will calculate the discriminant
        let root1;
        let root2;
        let root3;
        //this will calculate the values of x1, x2, and x3
        discriminant = b * b - 3 * a * c;
        //this will check the value of the discriminant
        let temp1 = (3 * a * c - b * b) / (3 * a * a);
        //this will calculate the values of x1, x2, and x3
        let temp2 = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
        let temp3 = temp2 * temp2 / 4 + temp1 * temp1 * temp1 / 27;
        //this will check the value of the discriminant
        let temp4 = Math.sqrt(-temp3);
        let temp5 = Math.acos(-temp2 / (2 * temp4));
        let temp6 = Math.pow(temp4, 1/3);
        //this will calculate the values of x1, x2, and x3
        root1 = 2 * temp6 * Math.cos(temp5 / 3) - b / (3 * a);
        root2 = 2 * temp6 * Math.cos((temp5 + 2 * Math.PI) / 3) - b / (3 * a);
        root3 = 2 * temp6 * Math.cos((temp5 + 4 * Math.PI) / 3) - b / (3 * a);
        //this will alert the user the values of x1, x2, and x3
        resultDiv.innerText = (`The solutions of the third degree equation are x1 = ${root1}, x2 = ${root2}, and x3 = ${root3}`);
        alert(`Thanks for using this calculator app!`);
        break;                   
    default:
        //this will alert the user if the operator is invalid
        resultDiv.innerText = ("Invalid operator");
        resultDiv.style.color = "red";
        resultDiv.style.fontSize = "20px";
        break;                  
}