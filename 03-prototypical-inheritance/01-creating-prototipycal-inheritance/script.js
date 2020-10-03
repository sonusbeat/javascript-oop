function Lesson() {}

Lesson.prototype.filter = function() {
    console.log('Filtered!');
};

function Course() {
    this.price = function () {
        console.log('$ 5.00');
    };
}

Course.prototype = Object.create(Lesson.prototype);

const lesson = new Lesson();
const course = new Course();