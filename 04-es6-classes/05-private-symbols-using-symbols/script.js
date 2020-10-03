const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        return 'it has been drawn';
    }
}

const circle = new Circle(1);

console.log(circle);
// console.log('radius:', circle.radius); //>undefined
console.log(Object.getOwnPropertyNames(circle));

const key = Object.getOwnPropertySymbols(circle)[0];
console.log('radius:', circle[key]);