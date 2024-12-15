"use strict";

(() => {
    const ajaxUserData = async (URL) => {
        return fetch(URL).then(response => response.json());
    }

    const generateUserTable = users => {
      const newHTML = users.map(user => {
        const { name, username, email,phone,address:{street,city,zipcode}, company:{name: companyName}} = user;
        return `<tr>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${city}</td>
            <td>${street}</td>
            <td>${zipcode}</td>
            <td>${companyName}</td>
          </tr>`;
      }).reduce((a, b) => a + b, '');
      return newHTML;
    }

    const generateUserCountAndAverage = users => {
        const count = users.length;
        const averageLat = users.reduce((acc, user) => acc + parseFloat(user.address.geo.lat), 0) / count;
        const averageLng = users.reduce((acc, user) => acc + parseFloat(user.address.geo.lng), 0) / count;
        const newHTML = `
        <tr>
            <td>${count}</td>
            <td>${averageLat}</td>
            <td>${averageLng}</td>
        </tr>
        `
        return newHTML;
    }

    const popularEmailExtension = emails => {
        const emailExtensions = emails.map(user => user.email.split('@')[1].split('.')[1]);
        const emailExtensionCount = emailExtensions.reduce((acc, email) => {
            if (acc[email]) acc[email]++;
            else acc[email] = 1;
            return acc;
        }, {});
        const sortedEmailExtensionCount = Object.entries(emailExtensionCount).sort((a, b) => b[1] - a[1]);
        const popularEmailExtension = sortedEmailExtensionCount[0][0];
        const newHTML = sortedEmailExtensionCount.map(([extension, count]) => `
        <tr>
            <td>${extension}</td>
            <td>${count}</td>
            <td>${popularEmailExtension}</td>
        </tr>
        `).join('');
        return newHTML;
    }

    const renderUserTable = newHTML => document.getElementById('userTable').innerHTML = newHTML;
    const renderUserCountAndAverage = newHTML => document.getElementById('userCountAndAverage').innerHTML = newHTML;
    const renderPopularEmailExtension = newHTML => document.getElementById('emailExtensionTable').innerHTML = newHTML;

    document.getElementById('getDataFromServer').addEventListener('click', async () => {
        try {

            //get data from server
            const users = await ajaxUserData('https://jsonplaceholder.typicode.com/users');

            //generate html
            const usersTableHTML = generateUserTable(users);
            const userCountAndAverageHTML = generateUserCountAndAverage(users);
            const popularEmailExtensionHTML = popularEmailExtension(users);

            //render html
            renderUserTable(usersTableHTML);
            renderUserCountAndAverage(userCountAndAverageHTML);
            renderPopularEmailExtension(popularEmailExtensionHTML);

        } catch (error) {
            console.error(error);
        }
    });
})();