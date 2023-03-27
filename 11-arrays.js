/**
 * Arrays
 *    An array is an orderd list of values that you refere to with a name and an index.
 *    JavaScript does not have an explicit array data type. However, you can use the 
 *      predefined Array object and its methods to work with arrays in your applications. 
 *      The Array object has methods for manipulating arrays in various ways, such as joining,
 *      reversing, and sorting them. It has a property for determining the array length and 
 *      other properties for use with regular expressions.
 * 
 */

const arr1 = new Array(1, 2, 3, 4, 5);// Array of 5 elements
const arr2 = new Array(10); //  Array of 10 undefined elements
const arr3 = [1, 2, 3, 4, 5]; // Array Literal
const arr4 = []; // Empty Array

// Arrays can be assigned as a property of a new or existing object.
const obj1 = {
    name: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports']
}

console.log(obj1.hobbies[1]); // movies

const arr = ["one", "two", "three"];
console.log(arr[2]); // three
console.log(arr["length"]); // 3 same as arr.length-- accessing the array properties

/**
 * Iterating over an array
 *    The simplest way to iterate over an array is to use a for loop.
*/
const arrIteration = ["one", "two", "three"];
for (let i = 0; i < arrIteration.length; i++) {
    console.log(arr[i]);
}

/**
 * ForEach  
 *   The forEach() method executes a provided function once for each array element.
 * 
 *   Since JavaScript array elements are saved as standard object properties, it is not 
 *   advisable to iterate through JavaScript arrays using for...in loops, because normal 
 *   elements and all enumerable properties will be listed.
 *   
 */
const arrForEach = ["one", "two", ,'',"three"];
arrForEach.forEach(function (element) {
    console.log(element);
});
// or
arrForEach.forEach(element => console.log(element));

/**
 * Array Methods
 *   The Array object has a number of methods that can be used to manipulate arrays.
 */
const arrMethods = ["one", "two", "three"];
console.log(arrMethods.join()); // one,two,three
console.log(arrMethods.join('')); // onetwothree
console.log(arrMethods.join('-')); // one-two-three

const arrMethods2 = ["one", "two", "three"];
console.log(arrMethods2.reverse()); // [ 'three', 'two', 'one' ]

const arrMethods3 = ["one", "two", "three"];
console.log(arrMethods3.sort()); // [ 'one', 'three', 'two' ]

const arrMethods4 = ["one", "two", "three"];
console.log(arrMethods4.concat("four", "five")); // [ 'one', 'two', 'three', 'four', 'five' ]

const arrMethods5 = ["one", "two", "three"];
console.log(arrMethods5.slice(1, 2)); // [ 'two' ]

const arrMethods6 = ["one", "two", "three"];
console.log(arrMethods6.splice(1, 1)); // [ 'two' ]

const arrMethods7 = ["one", "two", "three"];
console.log(arrMethods7.splice(1, 1, "four")); // [ 'two' ]
console.log(arrMethods7); // [ 'one', 'four', 'three' ]

const arrMethods8 = ["one", "two", "three"];
console.log(arrMethods8.push("four")); // 4

const arrMethods9 = ["one", "two", "three"];
console.log(arrMethods9.pop()); // three

const arrMethods10 = ["one", "two", "three"];
console.log(arrMethods10.shift()); // one

const arrMethods11 = ["one", "two", "three"];
console.log(arrMethods11.unshift("four")); // 4

const arrMethods12 = ["one", "two", "three"];
console.log(arrMethods12.indexOf("two")); // 1

const arrMethods13 = ["one", "two", "three"];
console.log(arrMethods13.lastIndexOf("two")); // 1

const arrMethods14 = ["one", "two", "three"];
console.log(arrMethods14.includes("two")); // true

const arrMethods15 = ["one", "two", "three"];
console.log(arrMethods15.includes("four")); // false

const arrMethods16 = ["one", "two", "three"];
console.log(arrMethods16.toString()); // one,two,three

const arrMethods17 = ["one", "two", "three"];
console.log(arrMethods17.toLocaleString()); // one,two,three

const arrMethods18 = ["one", "two", "three"];
console.log(arrMethods18.valueOf()); // [ 'one', 'two', 'three' ]

const arrMethods19 = ["one", "two", "three"];
console.log(arrMethods19.entries()); // Array Iterator {}

const arrMethods20 = ["one", "two", "three"];
console.log(arrMethods20.keys()); // Array Iterator {}

const arrMethods21 = ["one", "two", "three"];
console.log(arrMethods21.values()); // Array Iterator {}

const arrMethods22 = ["one", "two", "three"];
console.log(arrMethods22.copyWithin(1, 2)); // [ 'one', 'three', 'three' ]

const arrMethods23 = ["one", "two", "three"];
console.log(arrMethods23.fill("four")); // [ 'four', 'four', 'four' ]

const arrMethods24 = ["one", "two", "three"];
console.log(arrMethods24.find(element => element === "two")); // two

const arrMethods25 = ["one", "two", "three"];
console.log(arrMethods25.findIndex(element => element === "two")); // 1

const arrMethods26 = ["one", "two", "three"];
console.log(arrMethods26.flat()); // [ 'one', 'two', 'three' ]

const arrMethods27 = ["one", "two", "three"];
console.log(arrMethods27.flatMap(element => element + "four")); // [ 'onefour', 'twofour', 'threefour' ]

const arrMethods28 = ["one", "two", "three"];
console.log(arrMethods28.forEach(element => console.log(element))); // undefined

const arrMethods29 = ["one", "two", "three"];
console.log(arrMethods29.map(element => element + "four")); // [ 'onefour', 'twofour', 'threefour' ]

const arrMethods30 = ["one", "two", "three"];
console.log(arrMethods30.reduce((accumulator, currentValue) => accumulator + currentValue)); // onetwothree

const arrMethods31 = ["one", "two", "three"];
console.log(arrMethods31.reduceRight((accumulator, currentValue) => accumulator + currentValue)); // threeonetwo

const arrMethods32 = ["one", "two", "three"];
console.log(arrMethods32.some(element => element === "two")); // true

const arrMethods33 = ["one", "two", "three"];
console.log(arrMethods33.every(element => element === "two")); // false

const arrMethods34 = ["one", "two", "three"];
console.log(arrMethods34.filter(element => element === "two")); // [ 'two' ]

const arrMethods35 = ["one", "two", "three"];
console.log(arrMethods35.sort((a, b) => a.localeCompare(b))); // [ 'one', 'three', 'two' ]

