console.log('######## Factory ########');

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            return 'Executed!';
        }
    };
}

const circle = createCircle(1);
console.log(circle.radius);
console.log(circle.draw());

console.log('######## Constructor ########');

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        return 'Executed!';
    };
}

const circle2 = new Circle(2);
console.log(circle2.radius);
console.log(circle2.draw());
