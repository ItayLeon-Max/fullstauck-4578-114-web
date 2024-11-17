const foo = (num) =>
    new Promise((resolve) => {
       setTimeout(() => {
           resolve(`The Number Is: ${num}`);
       }, 1000);
   });

async function init () {
    console.log(await foo(10));
}

init();