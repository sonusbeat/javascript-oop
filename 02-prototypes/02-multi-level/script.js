let array = [];

console.log(array);

function Course(name) {
    this.name = name;

    this.exec = function () {
        return 'executed!';
 ;   }
}

const course = new Course('Javascript');

console.log(course);