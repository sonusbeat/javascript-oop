function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = new Student('Daniel', 'Gonzalez');

student.course = 'Javascript';
student['level'] = 'Begginer';

const propertyName = 'country-name';
student[propertyName] = 'Mexico';

student.garbage = 'Throw me!';

delete student.garbage;

console.log(student);
