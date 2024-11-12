const isPrime = (num) => {
    if (typeof num !== 'number') {
        return undefined;
    } else {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(71)); 