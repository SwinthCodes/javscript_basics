/**
 * Function
 * A function definition (also called a function declaration, or
 * function statement) consists of the function keyword, followed by:
 *  The name of the function.
 *  A list of parameters to the function, enclosed in parentheses and
 *  separated by commas.
 *  The JavaScrip*t statements that define the function, enclosed in
 *  curly brackets, {  …  }
 *
 *      function name(parameters){
 *          statement
 *      }
 *
 *  Parameters are essentially passed to functions by value
 */

    function square(number){
        return number * number;
    }

    console.log(square(5));

    //When you pass an object as a parameter, if the function changes the object's
    // properties, that change is visible outside the function
    function myFunction(theObject){
        theObject.make = "Toyota";
    }

    const myCar = {
        make: 'Honda',
        model:'Accord',
        year: 1998
    }

    const x = myCar.make;
    console.log(x);
    myFunction(myCar);
    const y = myCar.make;
    console.log(y);

    //When you pass an array as a parameter, if the function changes any of the array's values,
    // that change is visible outside the function,

    function myArrayFunction(theArray) {
        theArray[0] = 30;
    }
    const array = [45];
    console.log(array);
    myArrayFunction(array);
    console.log(array);

/**
 * Anonymous functions
 *   functions can also be created by a function expression
 *    it does not have to have a name
 *
 */

    const squareAnon = function(number){
        return number * number;
    };
    const sqrAnon = squareAnon(9);
    console.log(sqrAnon);

    //a name can be provided with a function expression.
    // Providing a name allows the function to refer to itself,
    // and also makes it easier to identify the function in a debugger's
    // stack traces

    const factorial = function fac(n){
        return n < 2 ? 1 : n * fac(n-1);
    }

    console.log(factorial(9));

    function map(f, a) {
        const result = new Array(a.length);
        for (let i = 0; i < a.length; i++) {
            result[i] = f(a[i]);
        }
        return result;
    }

    const func = function(x){
        return x * x * x;
    };

    const numbers = [0,1,2,5,10];
    const cube = map(func, numbers);
    console.log(cube);

/**
 *  Defining a function does not execute it. Defining it names
 *  the function and specifies what to do when the function is called
 *
 *  Calling the function actually performs the specified actions with the
 *  indicated parameters
 *
 *  Functions must be in scope when they are called, but the function
 *  declaration can be hoisted
 *
 *  A function can call itself.
 *
 *  a function defined in the global scope can access all variables defined in the global 
 *  scope. A function defined inside another function can also access all variables defined 
 *  in its parent function, and any other variables to which the parent function has access
 *
 * 
 * 
 */

// The followirng variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return name + ' scored ' + (num1 + num2);
    }

    return add();
}

getScore(); // Returns "Chamahk scored 5"

/**
 * Recursion
 *  A function can refer to and call itself. There are three ways for a function to 
 *  refer to itself:
 *     the function's name
 *     arguments.callee
 *     an in-scope variable that refers to the function
 *      
 * 
 *
 */

function loop(x) {
    if (x >= 5) // termination condition
        return;
    console.log(x); // statement to execute
    loop(x + 1); // function's call itself
}
loop(0);

// A recursive function to traverse a tree of nodes from the OM
function walkTree(node) {
    if (node == null)
        return;
    console.log(node);
    for (let i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}

/**
 *  Closures
 *  Closures are one of the most powerful features of JavaScript. 
 *  JavaScript allows for the nesting of functions and grants the inner
 *  function full access to all the variables and functions defined inside 
 *  the outer function
 * 
 *  The outer function does not have access to the variables and functions defined
 *  inside the inner function. This provides a sort of encapsulation for the variables 
 *  of the inner function
 * 
 * 
 */

const pet = function(name) { // The outer function defines a variable called "name"
    const getName = function() {
        return name; // The inner function has access to the "name" variable of the outer function
    }
    return getName; // Return the inner function, thereby exposing it to outer scopes
}

const myPet = pet('Vivie');
console.log(myPet());

const createPet = function(name){
    let sex;
    const pet = {
        setName(newName){
            name = newName;
        },
        getName(){
            return name;
        },
        getSex(){
            return sex;
        },
        setSex(newSex){
            if(typeof newSex ==='string' &&
             (newSex.toLocaleLowerCase() === 'male' || newSex.toLocaleLowerCase()=='female')){
                sex = newSex;
             }
        }
    }

    return pet;

}

const newPet = createPet('Vivian');
console.log(newPet.getName());
newPet.setName('Oliver');
newPet.setSex('Male')
console.log(newPet.getName());
console.log(newPet.getSex());


/**
 * The arguments object
 * 
 *   The arguments of a function are maintained in an array-like object.
 *  
 *  This is often useful if you don't know in advance how many arguments will be passed 
 *  to the function. You can use arguments.length to determine the number of arguments 
 *  actually passed to the function, and then access each argument using the arguments 
 *  object.
 * 
 */

function myConcat(separator) {
    let result = ''; // initialize list
    let i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat(', ', 'red', 'orange', 'blue')); 
console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah')); 
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley')); 


/**
 * Default and rest parameters
 * 
 *  Default parameters allow you to set the value of a parameter if no value is passed
 *  Rest parameters allow you to pass an arbitrary number of arguments to a function
 * 
 */

//default parameters
function multiplyDefaultParams(a, b = 1) {
    return a * b;
}

console.log(multiplyDefaultParams(5));

//rest parameters
function multiplyRestParams(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

const mulArray = multiplyRestParams(2, 1, 2, 3);
console.log(mulArray);

/**
 * Arrow functions
 *  a shorter syntax compared to function expressions and does not have its own this,
 *  arguments, super, or new.target. Arrow functions are always anonymous.
 * 
 * 
 */

function normalFunc(){
    return 'Normal Function';
}

()=> 'Arrow Function';