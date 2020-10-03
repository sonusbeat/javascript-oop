function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(1) => new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const shape = new Shape();
const circle = new Circle(1);

// shape.duplicate();
// circle.draw();
// circle.duplicate();