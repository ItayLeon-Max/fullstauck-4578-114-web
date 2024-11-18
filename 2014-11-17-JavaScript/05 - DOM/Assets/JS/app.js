//DOM - Document Object Model

const saveName = () => {
    const name = document.getElementById('myInput').value;
    localStorage.setItem('username', name);
}

const restoreName = () => {
    const name = localStorage.getItem('username');
    if (name) {
        document.getElementById('myInput').value = name;
    }
}

let saveBtn = document.getElementById('saveBtn');
saveBtn.onclick = saveName;

let restoreBtn = document.getElementById('restoreName');
restoreBtn.onclick = restoreName;








