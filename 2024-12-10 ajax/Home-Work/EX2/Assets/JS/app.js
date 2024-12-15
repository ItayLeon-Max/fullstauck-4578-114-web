"use strict";

(() => {
    const ajaxUserData = async (URL) => {
        return await fetch(URL).then(response => response.json());
    }

    const generateUserLi = user => {
        const { name, username, email, phone, address: { street, city, zipcode }, company: { name: companyName } } = user;
        return `
        <li>Name: ${name}</li>
        <li>Username: ${username}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Street: ${street}</li>
        <li>City: ${city}</li>
        <li>Zipcode: ${zipcode}</li>
        <li>Company: ${companyName}</li>
        `;
    }

    const renderUserLi = newHTML => document.getElementById('userFromServer').innerHTML = newHTML;

    document.getElementById('getDataFromServer').addEventListener('click', async () => {
        try {
                
            //get id from input
            const id = document.getElementById('idInput').value;
            
            //get data from server
            const user = await ajaxUserData(`https://jsonplaceholder.typicode.com/users/${id}`);

            //generate html
            const userLiHTML = generateUserLi(user);
            
            testUserOnServer
            //render html
            renderUserLi(userLiHTML);

        } catch (error) {
            console.error(error);
        }
    });
})();
