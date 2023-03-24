/**
 * Array literals are list of zero or more expressions enclosed in
 * square brackets []
 * Placing two commas in a row in an array literal leaves an empty slot
 * for the unspecified element
 * Trailing commas at the end of the array list are ignored
 */

    const empty =[];
    const coffee = ["French Roast", "Colombian", "Konda"];
    const space = ["void",,"darkness"];

/**
 *  Double commas is not the same as undefined. If you were to map over
 *  the empty element it would be skipped by the mapping function. However,
 *  using index[] will return undefined.
 *
 *  If inserting empty spaces use undefined or add a comment in that space
 *  to highlights its absence
 *
 */
    const undef = ['Apple', undefined, 'Banana'];
    const comment = ['Orange',/* empty */,'Rasin'];


/**
 *  Trailing commas help keep git diffs clean when you have a multi-line
 *  array, because appending an item to the end only adds one line, but
 *  does not modify the previous line.
 */


/**
 * Boolean Literals:
 * has two literal values true and false
 */


/**
 * Numeric Literals
 * includes integer literals in different bases as well as floating-point
 * literals in base-10
 *
 */

/**
 * Floating point literals can have the following parts:
 * An unsigned decimal integer
 * A decimal point (.)
 * A fraction ( another decimal number)
 * An exponent
 */


/**
 * Object Literals
 * A list of zero or more pairs of property names and associated values of
 * an object, enclosed in curly braces ({})
 */
const sales ="Toyota";

function carTypes(name){
    return name ==='Honda' ? name : `Sorry, we don't sell ${name}`;
}

const car = {
    myCar:'Saturn',
    getCar: carTypes("Honda"),
    special: sales,
    manyCars: {
        a: 'Saab',
        b: 'Jeep',
        c: 'Nisan'
    }
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
console.log(car.manyCars.a);

/**
 * Bracket notation
 * properties names that are not valid identifiers cannot be accessed as a dot
 * property. They must be accessed with the bracket notation []
 */

const unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!',
    'spaced property': 'Property with spaces in name'
}

console.log(unusualPropertyNames['']);
console.log(unusualPropertyNames['!']);
console.log(unusualPropertyNames['spaced property']);


/**
 * RegExp Literals
 * A pattern enclosed between slashes.
 */

const regEx = /ab+c/;

/**
 * String Literals
 * Zero or more characters enclosed in double or single quotation marks. A string must
 * be delimited by quotation marks of the same type.
 * You should use string literals unless the String Object is needed.
 *
 * Javascript will convert the string literal to a temporary String object, then
 * discards the temporary String object
 *
 * Template Literals are also available. Template literals are enclosed by the
 * back-tick ` instead of double or single quotes
 */

console.log("Apples are tasty");
console.log('Oranges are good too');
const sample = 'sample words';
console.log(`Here are ${sample}`);


