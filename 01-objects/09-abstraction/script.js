function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimumLocation = function (factor) {
        return factor;
    };
    this.exe = function () {
        return this.computeOptimumLocation(0.1);
    };
}

const circle = new Circle(2);

console.log(circle.exe());