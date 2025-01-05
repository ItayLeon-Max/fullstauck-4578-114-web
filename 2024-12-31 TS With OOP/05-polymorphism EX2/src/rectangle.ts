import Shape from "./shape.js";

export default class Rectangle extends Shape {
    public constructor(
        private width: number,
        private height: number
    ){
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
    
}