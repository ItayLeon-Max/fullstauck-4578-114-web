"use strict";

(() => {

    function showThis(){
        console.log(this);
    }

    document.getElementById('button').addEventListener('click', showThis);

    showThis();

    document.getElementById('greenButton').addEventListener('click', function(){
        this.style.backgroundColor = 'green';
    });




})();

