// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
    constructor(radius = 0) {
        _radius.set(this, radius);        
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`);
    }
}

module.exports = Circle;

// In case we have another class in this module
// module.exports.Square = Square;