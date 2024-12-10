"use strict";

(() => {
    const getRandomColorAfterDelay = () => {
        setTimeout(() => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = `#${randomColor}`;
        }, 3000);
    };

    document.getElementById('choseColor').addEventListener('click', getRandomColorAfterDelay);

})();

