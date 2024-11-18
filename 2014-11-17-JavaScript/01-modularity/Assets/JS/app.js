// function 
displayInputPower = (input, power) =>  {
    return input ** power;
}

inputIsEven = (input) => {
    return input % 2 === 0;
}

inputIsDivisibleBy3 = (input) => {  
    return input % 3 === 0;
}

inputIsDivider = (input, divider) => {
    return input % divider === 0;
}

getInputFormUser = () => {
    return +(prompt("Enter a number: "));
}

userStillWantsToContinue = (input) => {
    return input !== 0;
}

  //main code:

  let input = getInputFormUser()

  while(userStillWantsToContinue(input)){
    if(inputIsDivider(input,2)){
      displayInputPower(input, 2)
    }
    if(inputIsDivider(input,3)){
      displayInputPower(input, 3)
    }
    getInputFormUser()
  }

  //1. Layout thr code in English
  //2. data flow
  //3. DRY