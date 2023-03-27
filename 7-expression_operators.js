/**
 * Expressions and Operators
 * 
 *  An expression is a valid unit of code that resolves to a value. 
 *  There are two types of expressions: those that have side effects 
 * (such as assigning values) and those that purely evaluate.
 * 
 *  x = 7 is an example of an expression with a side effect
 *  3 + 4 is an example of a pure expression
 * 
 *  Complex expressions can be built using operators. Such  as: = and +.
 * 
 *   Precedence: The order in which operators are evaluated is called are in the following order:
 *      Multiplication(*), Division(/), Addition(+), Subtraction(-)
 *      The order is from left to right.
 *      Order can be overridden by using parentheses which groups expressions.
 * 
 */
console.log(3 + 4 * 5); // 23
console.log((3 + 4) * 5); // 35


/**
 * Javascript has binary and urnary operators.
 * A binary operator requires two operands, one before the operator and one after.
 * A unary operator requires a single operand, either before or after the operator.
 * There is a special operartor called the ternary operator that requires three operands.
 * 
 */

let x = 3;
//called infix because the operator is in between the two operands
console.log(x + 4); // 7
//called postfix because the operator comes after the operand
console.log(x++); // 4
//called prefix because the operator comes before the operand
console.log(++x); // 4
//called ternary because it requires three operands
console.log( x > 5 ? 1 : 2); // 2

/**
 * Assignment operators
 *  An assigment operator assigns a value to its left operand based on the value of
 *  its right operand.
 *  The simple assigment operator is equal (=).
 *     x = y assigns the value of y to x.
 *  The compound assigment operators combine a binary and assigment operator.
 *   Addition assignment 
 *      x += y is the same as x = x + y
 *   Subtraction assignment
 *      x -= y is the same as x = x - y\
 *   Multiplication assignment
 *      x *= y is the same as x = x * y
 *   Division assignment
 *      x /= y is the same as x = x / y
 *   Remainder assignment
 *       x %= y is the same as x = x % y
 *   Exponentiation assignment
 *       **= y is the same as x = x ** y
 *   Left shift assignment
 *       <<= y is the same as x = x << y
 *   Right shift assignment
 *       >>= y is the same as x = x >> y
 *   Unsigned right shift assignment
 *       >>>= y is the same as x = x >>> y
 *   Bitwise AND assignment
 *       &= y is the same as x = x & y
 *   Bitwise XOR assignment
 *       ^= y is the same as x = x ^ y
 *   Bitwise OR assignment
 *       |= y is the same as x = x | y
  *  ogical AND assignment
 *       &&= y is the same as x = x && y
 *   Logical OR assignment
 *       ||= y is the same as x = x || y
 *   Logical nullish assignment
 *       ??= y is the same as x = x ?? y
 *   Nullish coalescing assignment
 *       x ??= f() is the same as x = x ?? f()
 * 
 */



/**
 * Destructoring
 *  Destructuring allows you to extract data from arrays or objects into distinct variables.
 *  
*/
 
const destArray = [1, 2, 3, 4, 5];

//without destructuring
console.log(destArray[0]); // 1
console.log(destArray[1]); // 2
console.log(destArray[2]); // 3

//with destructuring
const [first, second, third] = destArray; //first = 1, second = 2, third = 3
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

//you can also skip elements
const [first1, , third1] = destArray; //first = 1, third = 3
console.log(first1); // 1
console.log(third1); // 3
function f(){
    return 1;
}


/**
 * Comparison operators
 *    A comparison operator compares its operands and returns a logical value
 *      based on whether the comparison is true. The operands can be numerical, 
 *      string, logical, or object values
 *   The comparison operators are:
 *      Equal (==) Returns true if the operands are equal.
 *      Not equal (!=) Returns true if the operands are not equal
 *      Strict equal (===) Returns true if the operands are equal and of the same type
 *      Strict not equal (!==) Returns true if the operands are of the same type but not equal, or are of different type
 *      Greater than (>) Returns true if the left operand is greater than the right operand.
 *      Greater than or equal (>=) Returns true if the left operand is greater than or equal to the right operand.	
 *      Less than (<) Returns true if the left operand is less than the right operand.	
 *      Less than or equal (<=) Returns true if the left operand is less than or equal to the right operand.	
 */

console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 === 3); // true
console.log(3 === '3'); // false
console.log(3 != 3); // false
console.log(3 != '3'); // false
console.log(3 !== 3); // false
console.log(3 !== '3'); // true
console.log(3 > 3); // false
console.log(3 > '3'); // false
console.log(3 >= 3); // true
console.log(3 >= '3'); // true
console.log(3 < 3); // false
console.log(3 < '3'); // false
console.log(3 <= 3); // true
console.log(3 <= '3'); // true


/**
 * Arithmetic operators
 *   An arithmetic operator takes numerical values (either literals or variables) as 
 *   their operands and returns a single numerical value.
 *   The arithmetic operators are:
 *      Addition (+) Adds together two values
 *      Subtraction (-) Subtracts one value from another
 *      Multiplication (*) Multiplies two values
 *      Division (/) Divides one value by another
 *      Remainder (%) Returns the remainder left over when one operand is divided
 *          by a second operand
 *      Exponentiation (**) Returns the result of raising the first operand to the 
 *          power of the second.
 *      Incremetn (++) Increments (adds one to) its operand and returns a value.
 *      Decrement (--) Decrements (subtracts one from) its operand and returns a value.
 *      Unary negation (-) Converts the operand to a number, if it isn't already,
 *          and then negates it.
 *      Unary plus (+) Converts its operand to a number, if it isn't already.
 * 
 * 
 */

let y = 3;
console.log(3 + 3); // 6
console.log(3 - 3); // 0
console.log(3 * 3); // 9
console.log(3 / 3); // 1
console.log(3 % 3); // 0
console.log(3 ** 3); // 27
console.log(y++); // 3
console.log(++y); // 5
console.log(y--); // 5
console.log(--y); // 3
console.log(-y); // -3
console.log(+y); // 3

/**
 * Logical operators
 *  A logical operator is a symbol or word used to connect two or more expressions
 *  so that the value of the compound expression produced depends only on the
 *  values of the original expressions and on the meaning of the operator.
 *  The logical operators are:
 *     Logical AND (&&) Returns true if both operands are true
 *     Logical OR (||) Returns true if either operand is true
 *     Logical NOT (!) Reverses the logical state of its operand
 *     Logical nullish assignment (??) Returns its right-hand side operand when
 *          its left-hand side operand is null or undefined, and otherwise returns
 *          its left-hand side operand.
 *      
 */

console.log(3 && 3); // 3
console.log(3 && 0); // 0
console.log(3 || 3); // 3
console.log(3 || 0); // 3
console.log(!3); // false
console.log(!0); // true
console.log(3 ?? 3); // 3
console.log(0 ?? 3); // 0
console.log(null ?? 3); // 3
console.log(undefined ?? 3); // 3

/** 
 * Short-circuit evaluation
 *  As logical expressions are evaluated left to right, they are tested for possible 
 *  "short-circuit" evaluation using the following rules:
 *       false && anything is short-circuit evaluated to false.
 *       true || anything is short-circuit evaluated to true
 * 
 */

/**
 * Terenary operator
 *    The conditional (ternary) operator is the only JavaScript operator that takes
 *    three operands: a condition followed by a question mark (?), then an expression
 *    to execute if the condition is truthy followed by a colon (:), and finally the
 *    expression to execute if the condition is falsy. This operator is frequently
 *    used as a shortcut for the if statement.
 * 
 */

const ternary = 3 > 3 ? 'true' : 'false';
console.log(ternary); // false

/**
 * Unary Operators
 *    Unary operators are operators with only one operand. The operand can be either
 *    before or after the operator.
 *    The unary operators are:
 *      delete Deletes an object or property
 *      typeof Returns a string indicating the type of the unevaluated operand
 *      void Discards an expression's return value
 * 
 */

const obj = {a: 1, b: 2, c: 3};
delete obj.a;
console.log(obj); // {b: 2, c: 3}
console.log(typeof 3); // number
console.log(typeof '3'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // function
console.log(void 3); // undefined


/**
 * Relational operators
 *    Relational operators compare their operands and return a logical value based
 *    on whether the comparison is true. The operands can be numerical, string,
 *    logical, or object values.
 *    The relational operators are:
 *      In (in) Returns true if the specified property is in the specified object or
 *         its prototype chain.
 *      Instance of (instanceof) Returns true if the specified object is of the
 *        specified object type.
 */

const obj1 = {a: 1, b: 2, c: 3};
console.log('a' in obj1); // true
console.log('d' in obj1); // false
console.log(obj1 instanceof Object); // true
console.log(obj1 instanceof Array); // false

/**
 * This operator
 *    The this keyword refers to the object it belongs to.
 */

const obj2 = {
    a: 1,
    b: function() {
        console.log(this.a);
    }
}
obj2.b(); // 1

/**
 * Groupiing Operator
 *      The grouping operator ( ) simply causes an expression to be evaluated in a
 *      different order than normal.
 */

console.log(3 * (3 + 3)); // 18

/**
 * New Operator
 *     The new operator creates an instance of a user-defined object type or of one
 *        of the built-in object types that has a constructor function.
 * 
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('John', 30);
console.log(person); // Person {name: 'John', age: 30}

/**
 * Super Operator
 *    The super keyword is used to access and call functions on an object's parent.
 */

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person1 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
const student = new Student('John', 30, 12);
console.log(student); // Student {name: 'John', age: 30, grade: 12}
