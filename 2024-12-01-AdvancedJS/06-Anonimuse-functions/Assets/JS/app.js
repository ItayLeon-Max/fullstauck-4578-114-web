printPower2 = (num, powerFunc) => {
    console.log(powerFunc(num));
}

printPower2(3, number => { return Math.pow(number, 2) }); // Anonymous function
//Aninymous function is a function that is not bound to an identifier.
//It is not accessible after its initial creation.
//It is used in the above example as a callback function.

