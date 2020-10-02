function Course(name) {
    // Instance members
    this.name = name;
    this.level = function() {
        console.log('Begginer');
    };
}

const course = new Course('javascript');

// Prototype members
Course.prototype.exec = function() {
    console.log('Executed!');
};

console.log('######## Object.keys ########');
// Returns instance members
// Also Instance and Prototype
console.log(Object.keys(course));

console.log('######## for in ########');

// Returns all members
for (let key in course) console.log(key);

console.log('######## obj.hasOwnProperty ########');
console.log(course.hasOwnProperty('name'));
console.log(course.hasOwnProperty('exec'));