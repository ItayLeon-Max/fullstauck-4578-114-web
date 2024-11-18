const sayHallo = () => {
    alert(`Hallo ${inputText.value}`);
}

const inputText = document.createElement('input');
inputText.type = 'text';
inputText.id = 'inputText';
inputText.placeholder = 'Type here';
document.body.appendChild(inputText);

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', sayHallo);



