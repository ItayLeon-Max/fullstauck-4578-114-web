const getMinOfArr = arr => {
    let min = arr[0];
    arr.forEach(numbers => {
        min = numbers < min ? numbers : min;
    });
    return min;
}

arr = [10, 2, 3, 4, 5];
console.log(getMinOfArr(arr)); 

