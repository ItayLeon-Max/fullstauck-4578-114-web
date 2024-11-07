let rectangle = {
    width: 10,
    hight: 20,
    color: 'red',
    xAxis: 2,
    yAxis: 3,
};


// output the rectangle properties with a for loop
for(let i = 0 ; i<1 ; i++) {
    document.write(`This is rectangle number ${i+1} <br>`);
    document.write(`Width: ${rectangle.width} <br>`);
    document.write(`Hight: ${rectangle.hight} <br>`);
    document.write(`Color: ${rectangle.color} <br>`);
    document.write(`X-axis: ${rectangle.xAxis} <br>`);
    document.write(`Y-axis: ${rectangle.yAxis} <br>`);
    document.write(`Area: ${rectangle.width * rectangle.hight} <br>`);
}

document.write('<br>');

// output the rectangle properties with a "for-in" loop
for(j in rectangle) {
    document.write(`${j} : ${rectangle[j]} <br>`);
}