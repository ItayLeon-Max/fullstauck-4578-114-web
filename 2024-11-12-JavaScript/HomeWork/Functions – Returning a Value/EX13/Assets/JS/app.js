const getRandomNumbersInArr = (sizeArr) => {
    const arr = [];
    for (let i = 0; i < sizeArr; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr; 
}

console.log(getRandomNumbersInArr(5));

