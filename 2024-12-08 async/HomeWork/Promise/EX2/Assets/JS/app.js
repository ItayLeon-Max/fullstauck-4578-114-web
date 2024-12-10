"use strict";

(async() => {
    const generatePrimeNumberAfterDelayAsync = async (minNumber, maxNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
                if(random % 1 === 0 && random % random === 0)return resolve(`The random number ${random} is a prime number`);
                else reject(`The random number ${random} is not a prime number`);
            }, 1000);
        });
    }

    document.getElementById('clickToRandom').addEventListener('click', async () => {
        let minNumber = +(document.getElementById('minNumber').value);
        let maxNumber = +(document.getElementById('maxNumber').value);
        let result = await generatePrimeNumberAfterDelayAsync(minNumber, maxNumber);
        document.getElementById('result').innerText = result;
        
    });
})();