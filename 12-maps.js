/**
 * Map Object
 *      A Map object is a simple key/value map and can iterate its elements in insertion order.
 *      A key in the Map may only occur once; it is unique in the Map's collection.
 *      A Map object is iterated by key-value pairs — a for...of loop returns a 2-member 
 *          array of [key, value] for each iteration
 *     
 */

const myMap = new Map();
const keyString = 'a string';
const keyObj = {};
const keyFunc = function () { };

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size); // 3
console.log(myMap.get(keyString)); 
console.log(myMap.get(keyObj)); 
console.log(myMap.get(keyFunc));
console.log(myMap.get('a string'));
console.log(myMap.get({})); 
console.log(myMap.get(function() {}));

// Iterating Maps
for (let [key, value] of myMap) {
    console.log(`key: ${key}, value: ${value}`);
}

for (const key of myMap.keys()) {
    console.log('keys ->',key);
}

for (const value of myMap.values()) {
console.log('values ->',value);
}

for (const [key, value] of myMap.entries()) {
console.log(`Entries: ${key} = ${value}`);
}

// Converting Map to Array
const myMap2 = new Map()

myMap2.set(0, 'zero')
myMap2.set(1, 'one')

console.log([...myMap2.keys()]) // [0, 1]

//Merge Maps
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

const second = new Map([
    [1, 'uno'],
    [2, 'dos']
]);

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

//Merge arrays into a map
console.log(new Map([...first, ...second, [1, 'eins']]));

/**
 * Set
 *   Set objects are collections of unique values. You can iterate its elements 
 *   in insertion order. A value in a Set may only occur once; it is unique in the 
 *   Set's collection.
 * 
 */

const mySet = new Set();
mySet.add(1); // Set [ 1 ]
mySet.add("some text"); // Set [ 1, 'some text' ]
mySet.add("foo"); // Set [ 1, 'some text', 'foo' ]

mySet.has(1); // true
mySet.delete("foo"); // removes "foo" from the set
mySet.size; // 2

for(const item of mySet) console.log(item);

// Convert Set to Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log([...mySet2]); // [1, 2, 3, 4]
