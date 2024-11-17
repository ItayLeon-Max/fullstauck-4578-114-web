const getRandomNumber = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      let n = Math.floor(Math.random() * 1000);
      console.log(`The random number is:${n}`)
      resolve();
    }, 500);
  });


async function init() {
  console.log('start')
  console.log(await getRandomNumber())
  console.log(await getRandomNumber())
  console.log(await getRandomNumber())
  console.log(await getRandomNumber())
  console.log(await getRandomNumber())
  console.log('end')
}

init();