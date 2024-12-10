"use strict";

(() => {

    const getData = async (URL) => {
        return fetch(URL).then(response => response.json());
    }

    const generateHTML = data => {
        const newHTML = data.map(user => {
            const {name, email} = user;
           return  `
                <li>name: ${name}, email: ${email}</li>
           `;
        }).reduce((acc, next) => acc + next, '');
        return newHTML;
    }

    const renderHTML = html => {
        document.getElementById('users').innerHTML = html;
    }


    document.getElementById('btn').addEventListener('click', async () => {
        try {
            //get data from the server
            const users = await getData('https://jsonplaceholder.typicode.com/users');

            //generate HTML
            const newHTML = generateHTML(users); 

            //render HTML
            renderHTML(newHTML);

        } catch (error) {
            console.error(error);
        }
    });
})();