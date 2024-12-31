"use strict";

(()=>{

    document.getElementById('b1').addEventListener('click', () => {
        document.write(nto1(5));
    });

    document.getElementById('b2').addEventListener('click', () => {
        document.write(evenNto1(5));
    });

    document.getElementById('b3').addEventListener('click', () => {
        document.write(oneToN(55));
    });

    document.getElementById('b4').addEventListener('click', () => {
        document.write(sumNto1(10));
        console.log(sumNto1(10));
    });

    document.getElementById('b5').addEventListener('click', () => {
        document.write(getFactorial(10));
    });

    document.getElementById('b6').addEventListener('click', () => {
        document.write(getFibonacci(9));
    });

    document.getElementById('b7').addEventListener('click', () => {
        console.log(printAllPropsOnUser(user));
    });

    const nto1 = (n) => {
        //print n to 1
        if (n === 1) return 0;
        else return n + ' ' + nto1(n - 1);
    }

    const evenNto1 = (n) => {
        if(n === 1) return 1;
        else if(n % 2 === 0) return n + ' ' + evenNto1(n - 1);
        else return evenNto1(n - 1);
    }

    const oneToN = (n) => {
        if(n <=0 ) return 1;
        else return oneToN(n - 1) + ' ' + n;
    }

    const sumNto1 = n => {
        if(n <= 0) return 0;
        return n + sumNto1(n - 1);
    }

    const getFactorial = n => {
        if(n === 1) return 1;
        else return n * getFactorial(n - 1);
    }
   
    const getFibonacci = n => {
        if(n <= 2) return 1;
        return getFibonacci(n - 1) + getFibonacci(n - 2);
    }

    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }

      const printAllPropsOnUser = (user) => {
        for(let prop in user){
            if(typeof user[prop] === 'object'){
                console.log(prop + ':');
                printAllPropsOnUser(user[prop]);
            } else console.log(prop);
      }
    }

   
})();