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
 *  
 *
 */

