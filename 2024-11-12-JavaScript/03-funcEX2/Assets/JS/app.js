const square = (m) => {
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < m; j++) {
            document.write("*");
            document.write(" ");
        }
        document.write("<br>");
    }
}

square(5);
