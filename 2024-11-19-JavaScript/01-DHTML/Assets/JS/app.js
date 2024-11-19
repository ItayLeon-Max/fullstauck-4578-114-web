const populate = () => {
    const animals = ['dog', 'cat', 'bird', 'fish', 'hamster', 'rabbit', 'turtle', 'snake', 'lizard', 'ferret'];
    const container = document.getElementById('container');

    for(let index of animals) {
        const li = document.createElement('li');
        li.textContent = index;
        container.appendChild(li);
    }
}



