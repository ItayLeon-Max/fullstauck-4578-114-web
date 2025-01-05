import Shape from "./shape.js";
export default class Circle extends Shape {
    Radius;
    constructor(Radius) {
        super();
        this.Radius = Radius;
    }
    getArea() {
        return Math.PI * this.Radius * this.Radius;
    }
}
