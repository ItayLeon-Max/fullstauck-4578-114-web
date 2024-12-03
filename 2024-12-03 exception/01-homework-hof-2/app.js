const getRandomBetween0And100 = () => Math.floor(Math.random() * 101);

const getRandomPoint = () => ({
    x: getRandomBetween0And100(),
    y: getRandomBetween0And100(),
});

const arrPoints = [];

for(let i = 0 ; i < 20 ; i++) {
    arrPoints.push(getRandomPoint());
}

console.log("all the points are:");
arrPoints.forEach((point, index) => {
    console.log(`Point ${index + 1}: (${point.x}, ${point.y})`);
});

console.log("the first point where x > y is:");
console.log(arrPoints.find(point => point.x > point.y));

console.log("the first point where y > 50 is:");
console.log(arrPoints.find(point => point.y > 50));

console.log('all point where y is even are:');
console.log(arrPoints.filter(point => point.y % 2 === 0));

console.log('all point where x is odd are:');
console.log(arrPoints.filter(point => point.x % 2 !== 0));

console.log('all point where y > 50 are:');
console.log(arrPoints.filter(point => point.y > 50));

console.log('first index where x > 50');
console.log(arrPoints.findIndex(point => point.x > 50));

console.log('distance of all points from origin are:');
arrPoints
    .map(point => Math.sqrt(point.x ** 2 + point.y ** 2))
    .forEach((distance) => {
        console.log(distance);
    });

console.log('Min x are:');   
console.log(arrPoints.reduce((min, { x }) => x < min ? x : min, Infinity)); 
