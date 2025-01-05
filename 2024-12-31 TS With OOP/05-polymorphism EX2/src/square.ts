import Shape from "./shape.js";

export default class Square extends Shape {
    public constructor(
        private riblength: number
    ){
        super();
    }

    public getArea(): number {
        return this.riblength * this.riblength;
    }
}