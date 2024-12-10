"using strict";

(async () => {
    const generateCuteAnimalAfterDelayAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cuteAnimal = ['Kitten', 'puppy', 'rabbit', 'scorpion', 'spider','Cockroach'];
                const randomCuteAnimal = cuteAnimal[Math.floor(Math.random() * cuteAnimal.length)];
                if(randomCuteAnimal === 'scorpion' || randomCuteAnimal === 'spider' || randomCuteAnimal === 'Cockroach') reject(`${randomCuteAnimal} is not a cute animal`);
                resolve(`Generated cute animal: ${randomCuteAnimal}`);
            },3000);
        });
    }
    document.getElementById('randomAnimal').addEventListener('click', async () => {
        try {
            const cuteAnimal = await generateCuteAnimalAfterDelayAsync();
            const result = document.getElementById('result');
            result.innerText = cuteAnimal;
            result.style.color = 'green';
        } catch (error) {
            result.innerText = error;
            result.style.color = 'red';
        }
    });
})();