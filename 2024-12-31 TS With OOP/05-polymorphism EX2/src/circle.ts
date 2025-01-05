import Shape from "./shape.js";

export default class Circle extends Shape {
    constructor(
        private Radius: number
    ){
        super();
    }

    public getArea(): number {
        return Math.PI * this.Radius * this.Radius;
    }
    
}