let person = { name: 'Daniel' };

//#################################//
//########### IMPORTANT ###########//
//#################################//

/*
    Only one property is visible,
    but prototype inheritance properties
    and methods are hidden 
*/

for (let key in person)
    console.log(key);

console.log(Object.keys(person));

console.log('-'.repeat(35));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);

console.log('-'.repeat(35));

Object.defineProperty(person, 'name',{
    writable: false,
    enumerable: false,
    configurable: false,
});

person.name = 'John';

console.log(Object.keys(person));

console.log(person);

delete person.name;