import Point from "./point.js";
import Triangle from "./Triangle.js";

const p1 = new Point(0, 0);
const p2 = new Point(0, 4);
const p3 = new Point(3, 0);

const t1 = new Triangle(p1, p2, p3);
console.log(t1.getPerimeter()); 