"using strict";

(async () => {
    const generateWorkingDayAfterDelayAsync =  () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const date = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const randomDate = date[Math.floor(Math.random() * date.length)];
                if(randomDate === 'Friday' || randomDate === 'Saturday') reject(`It's ${randomDate}, it's not a working day`);
                resolve(`It's ${randomDate}, it's a working day`);
            }, 1000);
        });
    } 
    document.getElementById('randomDate').addEventListener('click', async () => {
        try {
            const result = document.getElementById('result');
            result.style.color = 'black';
            result.innerHTML = 'Loading';
            for(let i = 0; i < 3; i++) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                result.innerHTML += '.';
            }
            const response = await generateWorkingDayAfterDelayAsync();
            result.innerText = response;
            result.style.color = 'green';
        } catch (error) {
            result.innerText = error;
            result.style.color = 'red';
        }
    });

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 3000);
    });
})();