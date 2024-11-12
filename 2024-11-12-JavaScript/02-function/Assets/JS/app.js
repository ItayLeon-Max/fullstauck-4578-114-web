const foo = (num) => {
    for(let i = 0; i < num; i++) {
        setInterval(() => {
        for(let j = 0; j < num; j++) {
            document.write("*");
        }
        document.write("<br>");
    }, 1000);
    }
}

let getNum = +prompt("Enter a number: ");
foo(getNum);

