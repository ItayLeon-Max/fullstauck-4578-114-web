const doCalc = (type) => {
    switch(type){
        case '+':
            return (a,b) => a+b;

        case '*':
            return (a,b) => a*b;    
    }
}

const calcFunc = doCalc('+');
console.log(typeof calcFunc);
console.log(calcFunc());

console.log(typeof calcFunc(2,1));
console.log(calcFunc(2,1));