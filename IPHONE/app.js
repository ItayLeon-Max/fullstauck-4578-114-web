// נתוני האייפונים הקודמים

const iphone14Plus = { 
    screenSize: 6.7, 
    thicknessMm: 7.8, 
    weightG: 203, 
    heightMm: 160.8, 
    widthMm: 78.1 
};
const iphone15Plus = { 
    screenSize: 6.7, 
    thicknessMm: 7.8, 
    weightG: 201, 
    heightMm: 160.9, 
    widthMm: 77.8 
};
const iphone16Plus = { 
    screenSize: 6.7, 
    thicknessMm: 7.8, 
    weightG: 199, 
    heightMm: 160.9, 
    widthMm: 77.8 
};

// ממוצע הגובה והרוחב באייפונים הקיימים
const avgHeight = (iphone14Plus.heightMm + iphone15Plus.heightMm + iphone16Plus.heightMm) / 3;
const avgWidth = (iphone14Plus.widthMm + iphone15Plus.widthMm + iphone16Plus.widthMm) / 3;

// יחס משקל-עובי
const weightThicknessRatio14 = iphone14Plus.weightG / iphone14Plus.thicknessMm;
const weightThicknessRatio15 = iphone15Plus.weightG / iphone15Plus.thicknessMm;
const weightThicknessRatio16 = iphone16Plus.weightG / iphone16Plus.thicknessMm;

// ממוצע יחס משקל-עובי
const avgWeightThicknessRatio = (weightThicknessRatio14 + weightThicknessRatio15 + weightThicknessRatio16) / 3;

// נתונים אפשריים לאייפון 17 אייר
const iphone17Air = {
    screenSize: [6.55, 6.6, 6.65], // כל האפשרויות למסך
    thicknessMm: [5, 6], // כל האפשרויות לעובי
};

// חישוב משקל, גובה ורוחב
const possibleWeights = [];
iphone17Air.thicknessMm.forEach(thickness => {
    possibleWeights.push(avgWeightThicknessRatio * thickness);
});

// ממוצע המשקל המשוער
const predictedWeight = possibleWeights.reduce((sum, weight) => sum + weight, 0) / possibleWeights.length;

// הגובה והרוחב המשוערים זהים לממוצע של האייפונים הקודמים
const predictedHeight = avgHeight;
const predictedWidth = avgWidth;

// הדפסת התוצאות
console.log("משקל משוער:", predictedWeight.toFixed(1), "גרם");
console.log("גובה משוער:", predictedHeight.toFixed(2), "מ\"מ");
console.log("רוחב משוער:", predictedWidth.toFixed(2), "מ\"מ");
