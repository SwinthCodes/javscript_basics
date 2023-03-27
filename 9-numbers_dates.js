/**
 * Numbers
 *      Nubmers are implimented as 64-bit floating point numbers.
 *      Integer values up to ±2^53 − 1 can be represented exactly.
 *      In addition to being able to represent floating-point numbers,
 *       the number type has three symbolic values: +Infinity, -Infinity, 
 *       and NaN (not-a-number).
 *      
 *      There are four types of number literals:
 *          Decimal: 42
 *          Hex: 0xf00d    
 *          Binary: 0b1010
 *          Octal: 0o744
 * 
 *      Number Object
 *         The built-in Number object has properties for numerical constants,
 *           such as maximum value, not-a-number, and infinity
 */

// Number Object
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// Number Methods
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(2e64)); // true

console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(2e64)); // false

console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(-Infinity)); // false
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(2e64)); // false

console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(-Infinity)); // false
console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(2e64)); // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

console.log(Number.parseFloat('123.45#')); // 123.45
console.log(Number.parseFloat('123.45#abc')); // 123.45
console.log(Number.parseFloat('abc123.45#')); // NaN

console.log(Number.parseInt('123.45#')); // 123
console.log(Number.parseInt('123.45#abc')); // 123
console.log(Number.parseInt('abc123.45#')); // NaN

// Number Properties
console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Number Methods
console.log((0.1 + 0.2).toFixed(2)); // 0.30
console.log((0.1 + 0.2).toPrecision(2)); // 0.3
console.log((0.1 + 0.2).toString()); // 0.30000000000000004
console.log((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101
console.log((0.1 + 0.2).toString(8)); // 0.14477124177124177
console.log((0.1 + 0.2).toString(16)); // 0.4ccccccccccccccd

/**
 * Date Object
 *     JavaScript does not have a date data type. However, you can use the Date object
 *       and its methods to work with dates and times in your applications. The Date object
 *       has a large number of methods for setting, getting, and manipulating dates. It does 
 *       not have any properties.
 *     JavaScript handles dates similarly to Java. The two languages have many of the same
 *       date methods, and both languages store dates as the number of milliseconds since 
 *       January 1, 1970, 00:00:00, with a Unix Timestamp being the number of seconds since
 *       January 1, 1970, 00:00:00.
 * 
 */


// Date Object
console.log(Date.now()); // 1582021000000
console.log(Date.parse('2020-02-15T00:00:00.000Z')); // 1581728000000
console.log(Date.UTC(2020, 1, 15, 0, 0, 0, 0)); // 1581728000000

// Date Methods
console.log(new Date().getDate()); // 15
console.log(new Date().getDay()); // 2
console.log(new Date().getFullYear()); // 2020
console.log(new Date().getHours()); // 12
console.log(new Date().getMilliseconds()); // 0
console.log(new Date().getMinutes()); // 0
console.log(new Date().getMonth()); // 1
console.log(new Date().getSeconds()); // 0
console.log(new Date().getTime()); // 1582021000000
console.log(new Date().getTimezoneOffset()); // -480
console.log(new Date().getUTCDate()); // 15
console.log(new Date().getUTCDay()); // 2
console.log(new Date().getUTCFullYear()); // 2020
console.log(new Date().getUTCHours()); // 20
console.log(new Date().getUTCMilliseconds()); // 0
console.log(new Date().getUTCMinutes()); // 0
console.log(new Date().getUTCMonth()); // 1
console.log(new Date().getUTCSeconds()); // 0
console.log(new Date().getYear()); // 120

console.log(new Date().setDate(1)); // 1580515200000
console.log(new Date().setFullYear(2020)); // 1580515200000
console.log(new Date().setHours(0)); // 1580515200000
console.log(new Date().setMilliseconds(0)); // 1580515200000
console.log(new Date().setMinutes(0)); // 1580515200000
console.log(new Date().setMonth(0)); // 1577836800000
console.log(new Date().setSeconds(0)); // 1577836800000
console.log(new Date().setTime(0)); // 0
console.log(new Date().setUTCDate(1)); // 1577836800000
console.log(new Date().setUTCFullYear(2020)); // 1577836800000
console.log(new Date().setUTCHours(0)); // 1577836800000
console.log(new Date().setUTCMilliseconds(0)); // 1577836800000
console.log(new Date().setUTCMinutes(0)); // 1577836800000
console.log(new Date().setUTCMonth(0)); // 1577836800000
console.log(new Date().setUTCSeconds(0)); // 1577836800000
console.log(new Date().setYear(120)); // 1577836800000

console.log(new Date().toDateString()); // Tue Feb 15 2020
console.log(new Date().toISOString()); // 2020-02-15T20:00:00.000Z
console.log(new Date().toJSON()); // 2020-02-15T20:00:00.000Z
console.log(new Date().toLocaleDateString()); // 2/15/2020
console.log(new Date().toLocaleString()); // 2/15/2020, 8:00:00 PM
console.log(new Date().toLocaleTimeString()); // 8:00:00 PM
console.log(new Date().toString()); // Tue Feb 15 2020 20:00:00 GMT-0800 (Pacific Standard Time)
console.log(new Date().toTimeString()); // 20:00:00 GMT-0800 (Pacific Standard Time)
console.log(new Date().toUTCString()); // Tue, 15 Feb 2020 04:00:00 GMT




