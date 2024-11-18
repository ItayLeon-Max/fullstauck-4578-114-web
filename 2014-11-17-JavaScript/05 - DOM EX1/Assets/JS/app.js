const change = () => {
    let p = document.querySelector('p');
    let textInput = document.getElementById('text');
    let colorInput = document.getElementById('color');   
    p.innerText = textInput.value;
    if(colorInput.value === "#ffffff" || colorInput.value === "#FFFFFF") {
        p.style.color = 'black';
        p.style.backgroundColor = colorInput.value;
    } else {
        p.style.backgroundColor = colorInput.value;
        p.style.color = 'white';
    }
}

const btn = document.getElementById('changeColorOnP');
btn.onclick = change;


