"use strict";

(() => {
    const ajaxUserData = async (URL) => await fetch(URL).then(response => response.json());

    const generateUserOnSelectTag = user => {
        const { id, name } = user;
        return `
            <option value="${id}">${name}</option>
        `;
    }

    const renderUserSelectOption = users => {
        const options = users.map(users => generateUserOnSelectTag(users)).join('');
        document.getElementById('selectUser').innerHTML = `
            <option value="0">Select User</option>
            ${options}
            `;
    }

    const generateTableUserFromSelected = user => {
        const {name, username, email,phone,address:{city,street,zipcode},company:{name: companyName}} = user;
        const newHTML = `
        <tr>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>${street}</td>
            <td>${zipcode}</td>
            <td>${companyName}</td>
        </tr>
        `;
        return newHTML;
    }

    const renderTableUserFromSelected = user => document.getElementById('userFromSelectDATA').innerHTML = generateTableUserFromSelected(user);
    
    document.getElementById('getDataFromServer').addEventListener('click', async () => {
        try {

            //get data from server
            const user = await ajaxUserData(`https://jsonplaceholder.typicode.com/users`);
            
            //render html
            renderUserSelectOption(user);

            //render table user from selected
            document.getElementById('selectUser').addEventListener('change', async (e) => {
                const selectedUser = user.find(user => user.id === parseInt(e.target.value));
                renderTableUserFromSelected(selectedUser);
            });

        } catch (error) {
            console.error(error);
        }
    });
})();
