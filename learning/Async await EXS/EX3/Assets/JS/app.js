const foo = (index) =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(`Current number is:${index}`);
    }, 100);
  });

 async function init() {
    for(let i = 0; i<=9 ; i++){
      console.log(await foo(i));
    }
  }
  init(); 