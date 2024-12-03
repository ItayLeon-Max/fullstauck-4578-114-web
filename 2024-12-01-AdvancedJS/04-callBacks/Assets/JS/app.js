power2 = number => {
    return Math.pow(number, 2);
}

power2Extended = number => {
    return Math.pow(number, 2);
}

// a function that is sent as an argument
// to another function is called callback function
// why?
// because the function that receives the callback function
// will call it back later
printPower2 = (num, powerFunc) => {
    console.log(powerFunc(num));
}

printPower2(3, power2);
printPower2(3, power2Extended); 