/**
 * Block statement - a groups of statements surrounded by curly braces
 *  Block statements are commonly used with control flow statements
 *  like( if, for, while)
 *
 */
{
    console.log('This is within a block statement');

}

if(true) {
    console.log('This is within a block statement which has a control flow')
}

/**
 *Conditional statements - set of commands that execute if a specified condition
 * is true
 */

/**
 * If Else
 *  statement is executed if a logical condition is true. The optional else will execute
 *  if the condition is false
 */
{
    if ('') {

    } else {
        //not true
    }

}

/**
 * If Else's can be continued via else if chaining. Each expression will be evaluated
 * and if found not true, that execution step will be skipped and the next step will be
 * evaluated until it reaches the final else block
 */

{
    if(''){

    }else if(''){

    }else if(''){

    }
}


/**
 * Falsy values
 * false
 * undefined
 * null
 * 0
 * nan
 * "" -- empty string
 */

//sample function
function checkData() {
    if (document.form1.threeChar.value.length === 3) {
        return true;
    } else {
        alert(
            `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
        );
        return false;
    }
}

/**
 * Switch
 * Allows a program to evaluate and attemps to match the expressions value to a case label.
 * If a match is found, the program executes the associated statement
 *
 * Javascript looks for a case clause with a label matching the values of expression
 * and then transfers control to that clause, executing the associated statement
 *
 * If not matching label is found, the program looks for the optional default clause.
 *
 * If no default clause is found, the program resumes execution at the statement following
 * the end of the switch
 *
 *
 * The optional break statement associated with each clause ensures that the program breaks out
 * of the switch once the matched statement is executed, and then continues execution at the
 * statement following the switch statement
 *
 */

//Switch example

switch ('test'){
    case 'label1':
        statement1=()=>{};
        break;
    case 'label2':
        statement1=()=>{};
        break;
    default:
        statementDefault = ()=>{};
}


/**
 * Exception Handling
 * Exceptions can be thrown to handle them withing try catch blocks
 *
 *
 */

/**
 * Try/Catch
 * The try...catch statement marks a block of statements to try,
 * and specifies one or more responses should an exception be thrown.
 * If an exception is thrown, the try...catch statement catches it
 * 
 * You can use a catch block to handle all exceptions that may be
 * generated in the try block
 *
 * The finally block contains statements to be executed after the try
 * and catch blocks execute
 *
 */
    try{

    }catch(e){

    }finally{

    }


/**
 * Throw statement
 *  A throw statement specifies the value to be thrown
 *  You may throw any expression, not just expressions of a specific type
 */
    try {
        throw "Error2";
        throw 42;
        throw true;
        throw {
            toString() {
                return "I'm an object!";
            },
        };
    }catch(e){
        console.log(e.message)
    }


/**
 *  Throw Generic Error
 *
 */
try{
    throw new Error('Whoops!')
}catch(e){
    console.error(`${e.name}: ${e.message}`)
}


/**
 * Error Types:
 *
 * Eval Error
 * Creates an instance representing an error that occurs regarding the
 *     global function eval().
 *
 *     EvalError is not used in the current ECMAScript specification and will thus not be thrown
 *     by the runtime. However, the object itself remains for backwards compatibility with earlier
 *     versions of the specification.
 */

 /** Range Error
 *  Creates an instance representing an error that occurs when a numeric
 *  variable or parameter is outside its valid range.
 *
 *   is thrown when trying to pass a value as an argument to a function that does not allow
 *   a range that includes the value
 */

    function checkValueRange(n){
        if(!(n >= 0 && n <= 100)){
            throw new RangeError("The argument must be between 0 and 100.")
        }
    }

    try {
        checkValueRange(101)
    }catch(err){
        if(err instanceof RangeError){
            console.log(err.message);
        }
    }

    // Range errors do not just have to be numeric
    function checkFruitRange(value){
        if(!["apple", "banana", "carrot"].includes(value)){
            throw new RangeError('The argument must be an "apple", "banana", "carrot0=');
        }

    }
    try{
        checkFruitRange('grape');
    }catch(err){
        if(err instanceof RangeError){
            console.log(err.message);
        }
    }

 /**
  *
  *  Reference Error
  *     Creates an instance representing an error that occurs when de-referencing
  *     an invalid reference.
  *
  *     object represents an error when a variable that doesn't exist (or hasn't yet been initialized)
  *     in the current scope is referenced.
  */

    try{
        let a = undfeineableVariable;

    }catch(e){
        console.log(e instanceof ReferenceError);
        console.log(e.message)
    }
    // or
    try{

        throw new ReferenceError("Reference error message");
    }catch(e){
        console.log(e instanceof ReferenceError);
        console.log(e.message)
    }



 /**
  * Syntax Error
  *     Creates and instance representing a syntax error
  *     object represents an error when trying to interpret
  *
  *     syntactically invalid code. It is thrown when the JavaScript
  *     engine encounters tokens or token order that does not conform to
  *     the syntax of the language when parsing code.
  */

    try{
        eval('foo bar')
    }catch(e){
        console.error(e instanceof SyntaxError);
        console.error(e.message);
    }


 /**
  * TypeError
  *     Creates an instance representing an error that occurs when a
  *     variable or parameter is not a valid type
  *
  *     object represents an error when an operation could not be performed,
  *     typically (but not exclusively) when a value is not of the expected
  *     type
  */

    try{
        null.f();
    }catch(e){
        console.log(e instanceof TypeError);
        console.log(e.message);
    }

    // or

    try{
        throw new TypeError('New Type Error caught')
    }catch(e){
           console.log(e instanceof TypeError);
           console.log(e.message);
    }


 /**
  * URI Error
  *     Creates an instance representing an error that occurs when
  *     encodeURI() or decodeURI() are passed invalid parameters.
  *
  *     object represents an error when a global URI handling function
  *     was used in a wrong way
  */
    try {
        decodeURIComponent("%");
    } catch (e) {
        console.log(e instanceof URIError);
        console.log(e.message);
    }

    try {
        throw new URIError("New URI Error caught");
    } catch (e) {
        console.log(e instanceof URIError);
        console.log(e.message);
    }
 /**
  * Aggregate Error
  *     Creates an instance representing several errors wrapped in a single error when multiple
  *     errors need to be reported by an operation, for example by Promise.any().
  *
  *      object represents an error when several errors need to be wrapped in a single error.
  *      It is thrown when multiple errors need to be reported by an operation, for example by
  *      Promise.any(), when all promises passed to it reject.
  */
     Promise.any([
         Promise.reject(new Error("some error")),
     ]).catch((e) => {
         console.log(e instanceof AggregateError);
         console.log(e.message);
     });

    try {
        throw new AggregateError([
            new Error("some error"),
        ], 'Hello');
    } catch (e) {
        console.log(e instanceof AggregateError);
        console.log(e.message);
    }

