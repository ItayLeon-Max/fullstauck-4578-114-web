"use strict";

(() => {
    const pickColorAsync = (succssesCallBack, errorCallBack) => {
        setTimeout(() => {
            const  colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
            const randomColor = colors[Math.floor(Math.random() * colors.length*2)];
            if(!randomColor) return errorCallBack('No color found');
            callBack(randomColor);
        },3000)
    }

    document.getElementById('switchColorAsync').addEventListener('click', () => {
        const colorPicked = color => {
            document.body.style.backgroundColor = color;
        }
        const failure = error => {
            console.log(error);
        }
        pickColorAsync(colorPicked, failure);
    })
})();

