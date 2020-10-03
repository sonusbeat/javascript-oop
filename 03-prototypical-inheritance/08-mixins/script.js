/**
 * Creates a mixing
 * 
 * @param {object} target - Object.prototype
 * @param  {...string} sources - source1, source2
 */
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        return 'eating';
    }
}

const canWalk = {
    walk: function () {
        return 'walking';
    }
}


const canSwim = {
    swim: function () {
        return 'swimming';
    }
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();

console.log(person);
console.log('person:', person.eat());
console.log('person:', person.walk());

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();

console.log(goldfish);
console.log('goldfish:', goldfish.eat());
console.log('goldfish:', goldfish.swim());
