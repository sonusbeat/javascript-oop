// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         return 'draw';
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = () => 'it has been moved!';
    }

    draw() {
        return 'is has been drawn!';
    }
}

const circle =  new Circle(1);

console.log(circle);
console.log(circle.radius);
console.log('Instance:', circle.move());
console.log('Prototype:', circle.draw());