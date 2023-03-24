/**
 *  A JavaScript identifier usually starts with a letter,
 *  underscore (_), or dollar sign ($). Subsequent characters can also
 *  be digits (0 – 9). Because JavaScript is case sensitive, letters include
 *  the characters A through Z (uppercase) as well as a through z (lowercase).
 */


/**
 *  var - Declares a variable, optionally initializing it to a value.
 *  var variables can be both global and local in scope
 *  vars are hoisted to the top of the file even if its
 *  declaration is not reached yet
 *
 **/

    var test = 'test'; // global

/**
 * Even though the hoisted variable is accessible here via hoisting
 * it is undefined since the initialization is not hoisted just the variable
 */

    console.log(hoisted);  // undefined

    function localTest(){
        var localVariable = 'local'; // local to function
        console.log(test); // can access test
        console.log(localVariable); // can access localTest
    }

    var hoisted = "up up and away";
    console.log(hoisted);

    //can access test
    console.log(test);
    //cannot access localTest
    //console.log(localVariable);




/**
 * let -  Declares a block-scoped, local variable, optionally initializing it to a value.
 * Block level scoping or within the expression with which it was declared
 * lets scoping allows it to be used withing sub method and functions declared
 * within that block
 **/

    let num = 1;
    if(num){
        let num = 2;
        console.log(num); // 2
    }
    console.log(num); // 1


/**
 *  const - Declares a block-scoped, read-only named constant.
 *  Read only variable after assignment / declaration of variable
 *  Only prevents re-assignment not mutation
 *
 **/

    const test2 ='test2';
    // Re-assignment will fail
    //test2 = "apple";

    const testObj = {key:' foo'};
    // Mutation is allowed
    testObj.key = 'bar';
    console.log(testObj.key==='bar');
