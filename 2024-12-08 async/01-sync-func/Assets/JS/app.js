"use strict";

(() => {
    const user = {
        id:123,
        name: 'John Doe',
    }

    const showUser = () => {
        console.log('function started');
        console.log(user);
        console.log('function ended');
    }

    const getUser = () => {
        console.log('function started');
        console.log('function ended');
        return user;
    }

    document.getElementById('showUser').addEventListener('click', ()=> {
        console.log('event started');
        showUser();
        console.log('event ended');
    })

    document.getElementById('getUser').addEventListener('click', ()=> {
        console.log('event started');
        const user = getUser();
        console.log(user);
        console.log('event ended');
    })
})();

