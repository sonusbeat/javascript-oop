function Person(name) {
    this.name = name;
    this.exec = function () {
        return 'Executed!';
    }
}

const person = new Person('Daniel');

console.log('Name:', person.name);

console.log('-'.repeat(40));

const Car = new Function('color', `
this.color = color;
this.exec = function () {
    return 'Executed!';
}
`);

const audi = new Car('black');
console.log('Color:', audi.color);

console.log('-'.repeat(40));

// Car.call({}, 1);
// Car.apply({}, [1, 2, 3, 4]);
