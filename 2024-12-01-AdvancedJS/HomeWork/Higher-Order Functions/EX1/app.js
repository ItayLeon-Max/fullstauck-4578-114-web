const numbers = [];
for(let i = 0; i < 20; i++){
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

//a.
numbers.forEach((number) => {
    console.log(number);
});

//b.
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(`First even number: ${firstEvenNumber}`);

//c.
const numberBig50 = numbers.find(number => number > 50);
console.log(`First number bigger than 50: ${numberBig50}`);

//d.
const notEvenNumbers = numbers.filter(number => number % 2 !== 0);
console.log(`Not even numbers: ${notEvenNumbers}`);

//e.
const allNumbersBig50 = numbers.filter(number => number > 50);
console.log(`All numbers bigger than 50: ${allNumbersBig50}`);

//f.
const indexFirstNumberBig50 = numbers.findIndex(number => number > 50);
console.log(`Index of first number bigger than 50: ${indexFirstNumberBig50}`);

//g.
const isEvenNumber = numbers.map(number => number % 2 === 0 ? 'even' : 'odd');
console.log(`Even or odd: ${isEvenNumber}`);

//h.
const maxNumber = numbers.reduce((max, number) => number > max ? number : max, 0);
console.log(`Max number: ${maxNumber}`);

//i.
const minNumber = numbers.reduce((min, number) => number < min ? number : min, 100);
console.log(`Min number: ${minNumber}`);
