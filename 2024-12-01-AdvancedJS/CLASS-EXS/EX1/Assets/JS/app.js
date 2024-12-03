//Clock live on screen
setTimeout(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = time;
    setInterval(()=>{
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').innerHTML = time;
    },1000);
})

