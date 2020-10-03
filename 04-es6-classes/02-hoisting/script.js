/*
    // We can call functions before or
    // after function declaration
    sayHello();

    // Function Declaration Syntax
    // This is raised to the top
    function sayHello() {
        console.log('Hello World');
    }

    // This will give us an error
    sayGoodbye();

    // Function Expression Syntax
    // This one is no hoisted "VERY IMPORTANT"
    const sayGoodbye = function() {
        console.log('Good Bye World')
    };

    // This one is Ok
    sayGoodbye();
*/

/*############################################*/
/* ############# VERY IMPORTANT ############# */
/*############################################*/

/* CLASS DECLARATION AND CLASS EXPRESSIONS */
/* *********** ARE NOT HOISTED *********** */

// This give us an error
// const circle = new Circle();

// Class Declaration - This is more clean
class Circle {}

// Class Expression - This is not common
// const Square = class {};