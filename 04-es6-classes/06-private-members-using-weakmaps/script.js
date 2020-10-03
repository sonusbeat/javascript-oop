const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, () => {
            console.log('it has been moved', this);
        });
    }

    draw() {
        return (Math.PI * Math.pow(2,_radius.get(this)))
                .toFixed(2);
    }

    move() {
        _move.get(this)();
    }
}

const circle = new Circle(2);

console.log('area:', circle.draw());
circle.move();