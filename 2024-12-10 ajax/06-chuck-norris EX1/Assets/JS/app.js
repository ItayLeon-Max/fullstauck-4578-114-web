"use strict";

(() => {

    const getData = async (URL) => {
        return fetch(URL).then(response => response.json());
    }

    const generateHTML = joke => joke.value; //return the joke value

    const renderHTML = html => {
        document.getElementById('joke').innerHTML = html;
    }

    const displayChuckNorrisJoke = async () => {
        try {
            //get data from the server
            const joke = await getData('https://api.chucknorris.io/jokes/random');

            //generate and render HTML
            const newHTML = generateHTML(joke);
            renderHTML(newHTML);

        } catch (error) {
            console.error(error);
        }
    }

    document.getElementById('jokeBtn').addEventListener('click', () => {
        displayChuckNorrisJoke(); // Display a joke immediately
        setInterval(displayChuckNorrisJoke, 5000); // Display a joke every 5 seconds
    });
})();