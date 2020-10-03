const _radius = new WeakMap();

export class Circle {
    constructor(radius = 0) {
        _radius.set(this, radius);        
    }

    draw() {
        console.log(`Circle with radius ${_radius.get(this)}`);
    }
}