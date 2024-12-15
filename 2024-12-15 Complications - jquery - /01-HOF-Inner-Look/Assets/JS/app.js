"use strict";

(() => {
    const grades = [90, 85, 70, 80, 95];
    let max = 0;
    for(const grade of grades) {
        if (grade > max) max = grade;
    }
    grades.reduce((acc, grade) => Math.max(acc, grade), 0);
    console.log(max);

    let min = Infinity;
    for(const grade of grades) {
        if (grade < min) min = grade;
    }
    grades.reduce((acc, grade) => Math.min(acc, grade), Infinity);
    console.log(min);

    let sum = 0;
    for(const grade of grades) {
        sum += grade;
    }
    grades.reduce((acc, grade) => acc + grade, 0);
    

})();