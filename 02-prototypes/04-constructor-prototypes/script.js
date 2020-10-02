// is the same myObject.__proto__
// Object.getPrototypeOf(myObject);

console.log('############ Functions ############');

function Course(name) {
    this.name = name;
}

const course = new Course('Javascript');

console.log(course);
console.log(Course.prototype);

console.log('############ Objects ############');

let object = {};

// Both Have same prototype
console.log(object.__proto__); 
console.log(Object.prototype);

console.log('############ Arrays ############');

let array = [];

// Both Have same prototype
console.log(array.__proto__); 
console.log(Array.prototype);
