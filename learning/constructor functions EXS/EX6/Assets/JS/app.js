function Circle(radius) {
  this.radius = radius;

  this.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  this. getPerimeter = function() {
    return 2 * (Math.PI * this.radius);
  }
}

let c1 = new Circle(3);
console.log(c1.getArea());
console.log(c1.getPerimeter());