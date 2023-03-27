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

//called infix because the operator is in between the two operands
console.log(3 + 4); // 7
//called postfix because the operator comes after the operand
console.log(3++); // 4
//called prefix because the operator comes before the operand
caonsole.log(++3); // 4
//called ternary because it requires three operands
console.log( 3 > 5 ? 1 : 2); // 2

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

let z = y = x = f();
//is the same as
//const z = (y = (x = f()));
console.log(z++); // 1
console.log(--y); // 0
console.log(++x); // 2
console.log(f); //function

/**
 * Comparison operators
 *    A comparison operator compares its operands and returns a logical value
 *      based on whether the comparison is true. The operands can be numerical, 
 *      string, logical, or object values
 *   The comparison operators are:
 *      Equal (==)
 *      Not equal (!=)
 *      Strict equal (===)
 *      Strict not equal (!==)
 *      Greater than (>)
 *      Greater than or equal (>=)
 *      Less than (<)
 *      Less than or equal (<=)
 *      Inequality (!=)
 *      Strict inequality (!==)
 *      
 * 
 * 
 */