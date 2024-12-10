"use strict";

(async() => {
    const generate7BoomAfterDelayAsync = async (minNumber, maxNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
                if(random % 7 === 0 || random.toString().includes('7')) return resolve('BOOM');
                reject("No 7's here");
            }, 10);
        });
    }

    document.getElementById('clickToRandom').addEventListener('click', async () => {
        let minNumber = +(document.getElementById('minNumber').value);
        let maxNumber = +(document.getElementById('maxNumber').value);
        let result = await generate7BoomAfterDelayAsync(minNumber, maxNumber);
        document.getElementById('result').innerText = result;
        
    });
})();