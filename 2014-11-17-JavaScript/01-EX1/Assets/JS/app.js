//7-Boom
//function

getUserInput = () => {
    return +prompt("Please enter a number")
}

isUserInputDivideByZero = (input) => {  
    return input !== 0
}

ifUserInputNumberDividedBySeven = (input) => {
    return input % 7 === 0
}

ifUserInputNumberContainsSeven = (input) => {
    return input.toString().includes("7")
}

printBoom = () => {
    console.log("Boom!")
}

//main code
let input = getUserInput()

while(isUserInputDivideByZero(input)){
    if(!isUserInputDivideByZero(input)){
        break;
    }
    if(ifUserInputNumberDividedBySeven(input) || ifUserInputNumberContainsSeven(input)){
      printBoom();
    }
    else{
        console.log(input)
    }
    input = getUserInput()
  }