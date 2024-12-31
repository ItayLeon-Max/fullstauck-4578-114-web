(() => {

    //get data from AJAX
    const getDataFromAJAX = async (url: string) => await fetch(url).then(response => response.json());

    //generate HTML
    const generateTableOnHTML = (users: any) => {
        const newHTML = users.map((user: any) => {
            const { email, first_name, last_name, avatar } = user;
            return `
                <tr>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${email}</td>
                    <td><img src="${avatar}" alt="Avatar"></td>
                </tr>
            `;
        }).reduce((acc: any, user: any) => acc + user, '');
        return newHTML;
    };

    //render HTML
    const renderTableHTML = (newHTML: any) => {
        const usersTable = document.getElementById('usersTable');
        if (usersTable) {
            usersTable.innerHTML = newHTML;
        }
    };

    document.getElementById('getUserFromData')?.addEventListener('click', async () => {
        try {
            //get data from AJAX
            const users = await getDataFromAJAX('https://reqres.in/api/users');

            //generate HTML
            const newHTML = generateTableOnHTML(users.data);

            //render HTML
            renderTableHTML(newHTML);
        } catch (error) {
            console.log(error);
        }
    });

})();