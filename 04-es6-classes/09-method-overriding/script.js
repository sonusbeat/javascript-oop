class Shape {
    move() {
        console.log('shape:', 'it has been moved');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle:', "it hasn't been moved");
    }
}

const circle = new Circle();

circle.move();