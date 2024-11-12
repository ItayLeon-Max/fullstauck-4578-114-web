const printAsteriskLine = (n) => {
    for(let i = 0 ; i < n; i++){
        document.write("*");
        document.write(" ");
    }
}

const square = (m) => {
    for(let i = 0; i < m; i++) {
        printAsteriskLine(m);
        document.write("<br>");
    }
}

square(5);
