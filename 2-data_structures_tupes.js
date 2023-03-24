/**
 * Boolean True / False
 */
    const bool = true | false;

/**
 * null - a special keyword denoting a null value
 * Represents a reference that points to a nonexistent
 * or invalid objet or address.
 * When using typeof on null it returns an object
 */
    console.log(typeof null);

/**
* undefined is a top level property whose value is not
 * defined
 **/
    let x;
    console.log(`x's value is ${x}`); // undefined

/**
 * number - a integer or floating point number
 */
    let num =1;
    let float = 2.12;

/**
 * bigint an integer with arbitrary precision
 */

/**
 * A sequence of characters that represent a text value
 */
    let string = "sample string";

/**
 * symbol - a data type whose instances are unique and immutable
 *
 */

/**
 * object - can be considered a collection of properties
 * property values can be of any type, including other objects
 */


/**
 * Javascript is a dynamically typed language, which
 * means you do not have to specify the data type of a variable
 * when you declare it. which means data types are automatically
 * converted as-needed during script execution
 */

    ans = 15; // number
    ans = 'Apple'; // string

/**
 * + operator converts numeric values to strings
 * + is also known as a concatenation operator
 */

    con = "This is converted to a string. " + 42; // "This is converted to a string. 42"
    con2 = 42 + "this is also a string";  // "42 this is also a string"
    con3 =  "37" + 7; // "377"

/**
 * Javascript will not convert numeric values to strings
 */

    con4 = "30" - 10; // 20
    con5 = "30" * 5 ; // 150


/**
 * Convert string to numbers
 * parseInt()  -- only returns whole numbers. best practice is to include the radix point
 *   to specify which numerical system is used. default radix is 10
 * parseFloat()
 *
 */

    parseInt("101", 2); // 5
    parseInt("101", 10); // 101

/**
 * Inserting a plus before a string will also convert it to a number
 */
   console.log(+"101"); // 101

