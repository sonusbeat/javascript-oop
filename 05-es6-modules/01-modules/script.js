const _radius = new WeakMap();

class Circle {
    constructor(radius = 0) {
        _radius.set(this, radius);        
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`);
    }
}

const circle = new Circle(24);
circle.draw();

console.log('radius:', _radius.get(circle));