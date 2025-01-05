import Shape from "./shape.js";
export default class Square extends Shape {
    riblength;
    constructor(riblength) {
        super();
        this.riblength = riblength;
    }
    getArea() {
        return this.riblength * this.riblength;
    }
}
