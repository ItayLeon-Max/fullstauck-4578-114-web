printPower2 = (num, powerFunc) => {
    console.log(powerFunc(num));
}

/*
if i want to use a callback function, i can pass the function as a parameter 
to the printPower2 function. 
i can declare the function in the parameter itself, or i can declare it outside
and pass it as a parameter.
 */

printPower2(3, power2 = number => { return Math.pow(number, 2) });
