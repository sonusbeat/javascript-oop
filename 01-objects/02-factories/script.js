function createCircle(radius) {
    return {
        radius,
        draw: function() {
            return 'Executed!';
        }
    };
}

const circle = createCircle(1);
const circle2 = createCircle(2);

console.log(circle.radius);
console.log(circle2.radius);
