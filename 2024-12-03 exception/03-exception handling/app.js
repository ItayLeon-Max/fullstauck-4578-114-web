const work = () => {
    try {
        // this block will run if there is no error
        console.log('hello1');
        const pi = Math.PI.toFixed(numberOfDigits);
        console.log(pi); 
        return
    } catch(error){
        // this block will run if there is an error
        console.log('error: ', error);
        alert('enter number between 0 and 100');
        return
    } finally {
        // this block will always run
        console.log('dealt with the error');
    }   
    console.log('hello2'); 
}

work();

// runtime error is here 
console.log('hello1');

const numberOfDigits = +prompt('Enter the number of digits after the decimal point: ');
try {
    // this block will run if there is no error
    console.log('hello1');
    const pi = Math.PI.toFixed(numberOfDigits);
    console.log(pi); 
    
} catch(error){
    // this block will run if there is an error
    console.log('error: ', error);
    alert('enter number between 0 and 100');
} finally {
    // this block will always run
    console.log('dealt with the error');
}
console.log('hello2'); 



