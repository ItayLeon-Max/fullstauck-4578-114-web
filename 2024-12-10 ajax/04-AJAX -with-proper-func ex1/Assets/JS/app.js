"use strict";

(() => {

    const getData = async (URL) => {
        return fetch(URL).then(response => response.json());
    }

    const generateHTML = data => {
        const newHTML = data.map(photos => {
            const {url, title} = photos;
           return  `
            <tr>
                <td>
                    ${title}
                </td>
                <td>
                    <img src="${url}" alt="image">
                </td>
            </tr>
           `;
        }).reduce((acc, next) => acc + next, '');
        return newHTML;
    }

    const renderHTML = html => {
        document.getElementById('img').innerHTML = html;
    }


    document.getElementById('btn').addEventListener('click', async () => {
        try {
            //get data from the server
            const photos = await getData('https://jsonplaceholder.typicode.com/photos');

            //generate HTML
            const newHTML = generateHTML(photos); 

            //render HTML
            renderHTML(newHTML);

        } catch (error) {
            console.error(error);
        }
    });
})();