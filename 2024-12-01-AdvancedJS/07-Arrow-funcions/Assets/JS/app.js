printPower2 = (num, powerFunc) => {
    console.log(powerFunc(num));
}

printPower2(3, number => { return Math.pow(number, 2) }); // Anonymous function

// arrow function styles
//the goal is - as less code as possible

//many parameters, many lines
const sum = (a,b) => {
    const result = a + b;
    console.log(result);
    return result;
}

//one parameter, one line
const power4 = a => {return Math.pow(a, 4)};

const powerX = (num,x) => console.log(Math.pow(num, x));

const powerX2 = (num,x) => Math.pow(num, x); // return is implicit