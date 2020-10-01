let a = 10;
let b = a;

x = 20;

console.log('a:', a);
console.log('b:', b);

console.log('-'.repeat(40));

let c = { value: 200 };
let d = c;

c.value = 100;

console.log('c.value:', c.value);
console.log('d:', d.value);

console.log('-'.repeat(40));

/*
    let number = 10;

    function increase(number) {
        number++;
        console.log('function number:', number);
    }

    increase(number);

    console.log('number:', number);
*/

let object = { value: 10 };

function increase(object) {
    object.value++;
}

increase(object);

console.log('object.value', object.value);

increase(object);

console.log('object.value', object.value);

increase(object);

console.log('object.value', object.value);