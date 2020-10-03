class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        return 'it has been drawn!';
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

    // Static Method
    static add(a, b) {
        return a + b;
    }
}

const circle = Circle.parse('{"radius": 1}');

console.log(circle);

const result = Circle.add(1, 2);

console.log('result:', result);
