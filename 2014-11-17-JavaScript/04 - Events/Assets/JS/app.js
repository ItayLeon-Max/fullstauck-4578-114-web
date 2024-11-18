//Events
// event is a signal that something has happened in the browser or in the DOM

// Event List:
// -----------
// click
// mouseover
// mouseout
// keydown
// keyup
// load
// resize
// scroll
// focus
// blur
// submit
// and more...
// ------------

const sayHello = () => {
    alert('Hello World');
}

const sayGoodbye = () => {
    alert('Goodbye');
}

let helloBtn = document.getElementsByClassName('sayHello')[0];
let goodbyeBtn = document.getElementsByClassName('sayGoodBye')[0];

helloBtn.addEventListener('click', sayHello);
goodbyeBtn.addEventListener('click', sayGoodbye);





