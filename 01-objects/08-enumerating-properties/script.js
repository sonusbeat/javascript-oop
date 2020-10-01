function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = new Student('Daniel', 'Gonzalez');

student.course = 'Javascript';

for (let key in student) {
    if (typeof student[key] !== 'function') {
        console.log(key, student[key]);
    }
}

console.log('-'.repeat(40));

keys = Object.keys(student);
console.log(keys);

console.log('-'.repeat(40));

if ('course' in student) {
    console.log('Student has a course');
}