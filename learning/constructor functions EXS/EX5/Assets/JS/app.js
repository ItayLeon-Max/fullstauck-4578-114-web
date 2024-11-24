function Point(x,y){
    this.x = x;
    this.y = y;

    this.getDistance = function(otherX, otherY){
        return Math.sqrt(Math.pow(this.x - otherX, 2) + Math.pow(this.y - otherY, 2));
    }
}

const p1 = new Point(2,3);
console.log(p1.getDistance(10,8));