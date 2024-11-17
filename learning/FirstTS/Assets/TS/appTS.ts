const avgOfArray = (arr: number[]): number => {
    let sum: number = 0;
    let avg: number = 0;
    for(let index in arr){
        sum += arr[index];
    }
    return avg = sum / arr.length;
}

const arr = [90, 67, 100, 40, 90];
console.log(avgOfArray(arr));

 