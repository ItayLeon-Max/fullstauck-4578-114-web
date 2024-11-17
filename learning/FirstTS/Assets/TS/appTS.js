var avgOfArray = function (arr) {
    var sum = 0;
    var avg = 0;
    for (var index in arr) {
        sum += arr[index];
    }
    return avg = sum / arr.length;
};
var arr = [90, 67, 100, 40, 90];
console.log(avgOfArray(arr));
