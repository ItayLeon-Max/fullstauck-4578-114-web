export default class Triangle {
    constructor(p1, p2, p3){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    getPerimeter() {
        return this.p1.getDistance(this.p2) + this.p2.getDistance(this.p3) + this.p3.getDistance(this.p1);
    }
}