import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Square from "./square.js";
function getArea(name) {
    switch (name) {
        case "Circle":
            alert(`Creating a ${name} object`);
            let radius = Number(prompt("Enter the radius of the circle"));
            return new Circle(radius);
            break;
        case "Rectangle":
            alert(`Creating a ${name} object`);
            let width = Number(prompt("Enter the width of the rectangle"));
            alert("Enter the height of the rectangle");
            let height = Number(prompt("Enter the height of the rectangle"));
            return new Rectangle(width, height);
            break;
        case "Square":
            alert(`Creating a ${name} object`);
            let riblength = Number(prompt("Enter the length of the square"));
            return new Square(riblength);
        default:
            alert("Invalid shape");
            throw new Error("Invalid shape");
    }
}
let shapeName = prompt("Enter the name of the shape (Circle, Rectangle, Square)");
let shape = getArea(shapeName);
alert(`The area of the ${shapeName} is ${shape.getArea()}`);
