function Circle() {
    const defaultLocation = { x: 0, y: 0 };   

    const computeOptimumLocation = function (factor) {
        return factor;
    };

    this.radius = 0;

    this.exe = function () {
        return this.radius * computeOptimumLocation(0.1);
    };
}

const circle = new Circle();
circle.radius = 4;

console.log(circle.exe());