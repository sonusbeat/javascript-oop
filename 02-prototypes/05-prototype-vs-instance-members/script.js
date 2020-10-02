function Course(name) {
    // Instance members
    this.name = name;
    this.duration = function() {
        console.log('Duration:', '4 weeks');
    };
}

// Prototype members
Course.prototype.exec = function() {
    this.duration();
    console.log('Executed!');
};

const course1 = new Course('javascript');
const course2 = new Course('python');

console.log(course1);
console.log(course2);

Course.prototype.toString = function() {
    return 'Course name: ' + this.name;
};

console.log(course1.toString());
console.log(course2.toString());

console.log('######### Log Exec #########');
course1.exec();