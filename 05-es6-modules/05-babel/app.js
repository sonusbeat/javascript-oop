"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _radius = new WeakMap();

var Circle = function () {
    function Circle() {
        var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, Circle);

        _radius.set(this, radius);
    }

    _createClass(Circle, [{
        key: "draw",
        value: function draw() {
            console.log("Circle with radius " + _radius.get(this));
        }
    }]);

    return Circle;
}();

var circle = new Circle(52);
circle.draw();
