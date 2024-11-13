const multiplicationBoard = [];

// multiplicationBoard with 10 rows and 10 columns
for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }
    multiplicationBoard.push(row);
}

// Display multiplicationBoard
let table = document.createElement("table");

// Create the header row
let headerRow = document.createElement("tr");
let emptyCell = document.createElement("th");
headerRow.appendChild(emptyCell); // Top-left empty cell
for (let i = 1; i <= 10; i++) {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = i;
    headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Create the table rows
for (let i = 0; i < multiplicationBoard.length; i++) {
    let row = document.createElement("tr");

    // Add row header (first column)
    let rowHeader = document.createElement("th");
    rowHeader.innerHTML = i + 1;
    row.appendChild(rowHeader);

    for (let j = 0; j < multiplicationBoard[i].length; j++) {
        let cell = document.createElement("td");
        cell.innerHTML = multiplicationBoard[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

//tr color change
for(let i = 0; i < table.rows.length; i++) {
    if(i % 2 === 0) table.rows[i].style.backgroundColor = "lightgrey";
    else if(i % 2 !== 0) table.rows[i].style.backgroundColor = "white";
    else if(i === 0) table.rows[i].style.backgroundColor = "lightblue";
    }



document.body.appendChild(table);




