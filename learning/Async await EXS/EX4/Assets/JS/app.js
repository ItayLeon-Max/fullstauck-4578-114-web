const multiplyBy5WithDelay = (i) =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(i * 5);
    }, 250);
  });

async function init() {
  const numbers = [100, 500, 800, 1000];
  for(let index of numbers) {
    console.log(await multiplyBy5WithDelay(index));
  }
}

init();