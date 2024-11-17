// function foo (){
//     return new Promise((resolve, reject) => {
//         let n = Math.random();
//         if (n < 0.2){
//              return resolve(" :( ");
//         }
//         return reject(" :) ");
//     });
// }

// async function init (){
//     try {
//         const x = await foo();
//         console.log(x);
//     } catch (err) {
//         console.log("Error",err);
//     }
// }

// init();

function foo(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(n*2);
        }, 200);
    })
}

const init = async () => {
    const arr = [1,2,3,4,5];
    // for(let i = 0 ; i < arr.length; i++){
    //     console.log(await foo(arr[i]));
    // }
    for(let x of arr){
        console.log(await foo(x));
    }
}

init();