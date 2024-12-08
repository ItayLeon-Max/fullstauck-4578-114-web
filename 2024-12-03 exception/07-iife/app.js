"use strict";

(() => {
    const form = document.getElementById('formidable');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('form submitted');
    });

    const button = document.getElementById('bouton');
    button.addEventListener('click', event => alert('button clicked'));
})();



