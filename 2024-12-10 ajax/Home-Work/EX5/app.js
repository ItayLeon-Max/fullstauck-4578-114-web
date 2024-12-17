"use strict";

(() => {

    //get the data from the Ajax
    const getDATA = async (URL) => await fetch(URL).then((response) => response.json());

    //generate the HTML
    const generateTableHTML = users => {
        const newHTML = users.map((user) => {
            const { albumId, id, title, url, thumbnailUrl } = user;
            return `
                <tr>
                    <td>${albumId}</td>
                    <td>${id}</td>
                    <td>${title}</td>
                    <td>${url}</td>
                    <td><img src="${thumbnailUrl}" alt="${title}"></td>
                </tr>
            `;
        }).reduce((acc, item) => acc + item, '');
        return newHTML;
    }

    const generateCountPhotosInAlbum = users => {
        //how much photos in each album
        const countPhotosInAlbum = users.reduce((acc, user) => {
            const { albumId } = user;
            acc[albumId] = acc[albumId] ? acc[albumId] + 1 : 1;
            return acc;
        }, {});
        return countPhotosInAlbum;
    }

    const generateCountPhotosInAlbumHTML = users => {
        const countPhotosInAlbum = generateCountPhotosInAlbum(users);
        const newHTML = Object.keys(countPhotosInAlbum).map((albumId) => {
            return `
                <tr>
                    <td>${albumId}</td>
                    <td>${countPhotosInAlbum[albumId]}</td>
                </tr>
            `;
        }).reduce((acc, item) => acc + item, '');
        return newHTML;
    }

    //render the HTML
    const renderHTML = newHTML => document.getElementById('photosTableFromData').innerHTML = newHTML;
    const renderCountPhotosInAlbumHTML = newHTML => document.getElementById('countPhotosInAlbum').innerHTML = newHTML;
    
    document.getElementById('getImgFromData').addEventListener('click', async () => {
        try {
             //get the data from the Ajax
            const user = await getDATA('https://jsonplaceholder.typicode.com/photos');

             //generate the HTML
            const userHTML = generateTableHTML(user);
            const countPhotosInAlbumHTML = generateCountPhotosInAlbumHTML(user);

            //render the HTML
            renderHTML(userHTML);
            renderCountPhotosInAlbumHTML(countPhotosInAlbumHTML);

        } catch (error) {
            console.log(error);
        }
    });
    
})();