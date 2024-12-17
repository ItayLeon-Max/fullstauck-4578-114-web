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

const isGradeInGrade = (grades, input) => {
  let startIndex = 0;
  let finishIndex = grade2.length - 1;
do {
  let currentIndex = Math.floor((startIndex + finishIndex) / 2);
  if(grades[currentIndex] === input) return true;
  if(grades[currentIndex] > input) {
    finishIndex = currentIndex - 1;
  }else{
    startIndex = currentIndex + 1;
  }
} while (finishIndex >= startIndex);
}

  console.log(isGradeInGrade(grade2, input2));

})();