"use strict";

(() => {
    document.getElementById('btn').addEventListener('click', async () => {
        try {
            //get data from the server
            const URL = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(URL);
            const data = await response.json()
            
            //generate HTML
            const newHTML = data.map(user => {
                const {name, email} = user;
               return  `
                    <li>name: ${name}, email: ${email}</li>
               `;
            }).reduce((acc, next) => acc + next, '');

            //render HTML
            document.getElementById('users').innerHTML = newHTML.join('');
            console.log(newHTML);

        } catch (error) {
            console.error(error);
        }
    });
})();