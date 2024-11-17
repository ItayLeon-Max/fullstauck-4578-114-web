const foo = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let r = Math.random();
        if (r < 0.5) {
          return resolve("Success (:");
        }
        return reject("Failure ):");
      }, 500);
    });

async function init() {
    try {
        const result = await foo();
        console.log(result);
    } catch (err){
        console.log(err);
    }
}