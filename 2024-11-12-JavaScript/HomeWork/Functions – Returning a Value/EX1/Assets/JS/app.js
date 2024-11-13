const getAvgOfArr = arr => {
    let sum = 0;
    let avg = 0;
    arr.forEach(numbers => {
        sum += numbers;
    });
    avg = sum / arr.length;
    return avg.toFixed(2);
}

const arr = [68, 90, 100, 75, 80];
console.log(getAvgOfArr(arr)); 