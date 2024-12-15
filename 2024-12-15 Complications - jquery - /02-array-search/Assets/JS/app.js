"use strict";

(() => {
  const grades = [99, 78, 87, 65, 66, 64, 99, 92, 80, 100];
  const input = +prompt("enter a number to check if it is in the array");
  const isInGrade = grades => grades.find(grade => grade === input) ? true : false;

  const grade2 = [64, 65, 66, 78, 80, 87, 92, 99, 99, 100]
  const input2 = +prompt("enter a number to check if it is in the array");

/*
find number with: (grades2 / 2) ----> [64,65,66,78,80] [87,92,99,99,100]
if number in first half, search in first half else search in second half 
with O(log n) time complexity
 */

    const binarySearch = (grades, input) => {
        let start = 0;
        let end = grades.length - 1;
        while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (grades[mid] === input) return true;
        if (grades[mid] < input) start = mid + 1;
        else end = mid - 1;
        }
        return false;
    };
    
    console.log(isInGrade(grades));
    console.log(binarySearch(grade2, input2));


  
})();