// Array search
//array random number from -100 to 100

// create an array of 100 random numbers from -100 to 100
let randomNumbers = Array.from({length: 100}, () => Math.floor(Math.random() * 201) - 100);
console.log(randomNumbers);

function searchArray(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return "Bingo! The number " + number + " is at index " + i;
        }
    }
    return "Sorry, the number " + number + " is not in the array";
}

let enterNumber = parseInt(prompt("Enter a number to search in the array: "));
alert(searchArray(randomNumbers, enterNumber));



