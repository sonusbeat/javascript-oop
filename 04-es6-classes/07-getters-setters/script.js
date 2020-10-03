const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (typeof value !== 'number')
            throw new Error('This is not a number');

        if (value <= 0)
            throw new Error('Number must be greater than 0');

        _radius.set(this, value);
    }
}

const circle = new Circle(1);

console.log('radius:', circle.radius);

circle.radius = 3;

console.log('radius:', circle.radius);