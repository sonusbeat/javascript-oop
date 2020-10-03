class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('it has been moved!');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('It has been drawn!');
    }
}

const circle = new Circle('green', 1);

circle.move();
circle.draw();
console.log('color:', circle.color);
console.log('radius:', circle.radius);
