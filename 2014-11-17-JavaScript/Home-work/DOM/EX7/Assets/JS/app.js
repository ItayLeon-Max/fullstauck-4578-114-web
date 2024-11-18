const changeBackgroundColorRandomly = () => {
    const input = document.getElementById("input");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    input.style.backgroundColor = "#" + randomColor;
}