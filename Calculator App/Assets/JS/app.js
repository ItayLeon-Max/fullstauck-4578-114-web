//Created by: Itay Leon
//Date: 2024-11-04
//Description: This is a simple calculator app that can perform basic arithmetic operations and some scientific operations.
//The user is prompted to enter the operator and the numbers to perform the operation.
//The user can perform the following operations: addition, subtraction, multiplication, division, modulo, cosine, sine, tangent, logarithm, square root, square, cube, and power
//, factorial, and a system of linear equations, quadratic equation, and third degree equation.
//The user can enter the operator and the numbers to perform the operation.
//*******************************************************************************

let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);
resultDiv.innerText = "";

// numbers container
let divBtnNumbersContainer = document.createElement("div");
divBtnNumbersContainer.className = "button-container";
document.body.appendChild(divBtnNumbersContainer);

// create buttons for numbers
for (let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", function () {
        resultDiv.innerText += i;
    });
    divBtnNumbersContainer.appendChild(button);
}

//  operators container
let divBtnOperatorsContainer = document.createElement("div");
divBtnOperatorsContainer.className = "button-operator-container";
document.body.appendChild(divBtnOperatorsContainer);

// clear button
let clearButton = document.createElement("button");
clearButton.innerText = "C";
clearButton.addEventListener("click", function () {
    resultDiv.innerText = "";
});
divBtnOperatorsContainer.appendChild(clearButton);

// operators buttons
let operators = ["+", "-", "*", "/", "%", "(", ")", "cos(", "sin(", "tan(", "log(", "sqrt(", "^", "!"];
operators.forEach(op => {
    let operatorButton = document.createElement("button");
    operatorButton.innerText = op;
    operatorButton.addEventListener("click", function () {
        // test if the last character is a number and the new operator is a function
        if (resultDiv.innerText && /\d$/.test(resultDiv.innerText) && /^[a-zA-Z]/.test(op)) {
            resultDiv.innerText += '*';
        }
        resultDiv.innerText += op;
    });
    divBtnOperatorsContainer.appendChild(operatorButton);
});

// equal button
let equalButtonContainer = document.createElement("div");
equalButtonContainer.className = "equal-button-container";
document.body.appendChild(equalButtonContainer);

let equalButton = document.createElement("button");
equalButton.className = "equal-button";
equalButton.innerText = "=";
equalButton.addEventListener("click", function () {
    try {
        // test if the last character is an operator
        if (!isBalanced(resultDiv.innerText)) {
            throw new Error("Mismatched parentheses");
        }

        // convert the expression to a valid JavaScript expression
        let expression = resultDiv.innerText.replace(/cos\(/g, "Math.cos(")
                                            .replace(/sin\(/g, "Math.sin(")
                                            .replace(/tan\(/g, "Math.tan(")
                                            .replace(/log\(/g, "Math.log(")
                                            .replace(/sqrt\(/g, "Math.sqrt(")
                                            .replace(/\^/g, "**");
        // replace the factorial operator with the factorial function
        expression = expression.replace(/(\d+)!/g, (_match, num) => {
            return factorial(parseInt(num));
        });
        resultDiv.innerText = eval(expression);
    } catch (error) {
        resultDiv.innerText = "Error!";
    }
});
equalButtonContainer.appendChild(equalButton);

//function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) return "Invalid input for factorial";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// function to check if the parentheses are balanced
function isBalanced(expression) {
    let stack = [];
    for (let char of expression) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}