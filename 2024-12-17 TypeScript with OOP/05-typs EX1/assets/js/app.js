document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    /*
        when we use the keyword 'as'
        we are telling typescript that we are sure that the element exists
        and we are casting it to the type we want
    */
    const input = document.getElementById('input');
    console.log(input.value);
});
function test() {
    const toy = {
        type: "geckrasel",
        eat: () => { console.log("I'm eating"); },
        age: () => { console.log("I'm 3 years old"); }
    };
}
