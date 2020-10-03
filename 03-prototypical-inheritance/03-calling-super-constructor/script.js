function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    // Shape(color); //> Does't work
    Shape.call(this, color); // Call Super Constructor
    this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(1) => new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const circle = new Circle(1, 'red');

console.log('color:', circle.color);
console.log('radius:', circle.radius);
circle.draw();
circle.duplicate();
