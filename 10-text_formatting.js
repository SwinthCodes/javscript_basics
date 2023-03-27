/**
 * Strings
 *    JavaScript's String type is used to represent textual data.
 *      Each element in the String occupies a position in the String. The first element is 
 *      at index 0, the next at index 1, and so on. The length of a String is the number of 
 *      elements in it. You can create strings using string literals or string objects
 * 
 * String Literals
 *      A string literal is a sequence of characters enclosed in single or double quotes.
 * 
 * String Objects
 *     A String object is an object wrapper for a string value. You can create a String
 *       object using the String constructor or as a literal value by enclosing
 *       characters in single or double quotes.
 */

// String Literals
var string1 = "Hello World";
var string2 = 'Hello World';
var string3 = "It's a beautiful day";

// String Objects
var string4 = new String("Hello World");
var string5 = new String('Hello World');
var string6 = new String("It's a beautiful day");

// String Properties
//    The length property returns the length of a string
var string7 = "Hello World";
console.log(string7.length); // 11

/**
 * Template Literals
 *      Template literals are string literals allowing embedded expressions. You can use
 *       multi-line strings and string interpolation features with them. They were called
 *      "template strings" in prior editions of the ES2015 specification.
 * 
 */

// Template Literals
var string8 = `Hello World`;
var string9 = `It's a beautiful day`;
var string10 = `Hello ${string8}`;
console.log(string10); // Hello Hello World

