/*
    'use strict';

    function Circle() {
        this.draw = function () {
            console.log(this);
        };
    }

    const circle = new Circle();

    // Method Call
    circle.draw();

    const draw = circle.draw;

    ################ Function Call ################
    // By default will point to the "Global Object"
    // which is window object.

    // If we enable strict mode "this" keyword
    // no longer to point to global object,
    // Instead will set as undefined.
    ###############################################
    draw();
*/

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log(this);
    }
}

const circle = new Circle();
const draw = circle.draw;

// By default classes enables 'strict mode'
draw(); //> undefined
