"use strict";

(() => {
    const user = {
        id:123,
        name: 'John Doe',
    }

    const showUser = () => {
        console.log('function started');

        //NOT ALL callbacks are asynchronous
        const grades = [80,90,95];
        const gradeWithFactor = grades.map(grade => grade + 2);
        console.log(gradeWithFactor)

        //setTimeout is asynchronous
        setTimeout(()=>{
            console.log(user);
        },3000)

        console.log('function ended');
    }

    document.getElementById('showUser').addEventListener('click', ()=> {
        console.log('event started');
        showUser();
        console.log('event ended');
    })

    const getUser = (callback) => {
        console.log('function started');
        setTimeout(()=>{
            //mimic an API call
            //now we want to return the user record from the API
            callback(user);
        },3000)
        console.log('function ended');
    }

    document.getElementById('getUser').addEventListener('click', ()=> {
        console.log('event started');
        const user = getUser(user => console.log(user));
        console.log('event ended');
    })
})();

