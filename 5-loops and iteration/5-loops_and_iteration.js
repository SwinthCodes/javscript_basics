/**
 * Loops offer a quick and easy way to do something repeatedly
 *
 *  The various loop mechanisms offer different ways to determine
 *  the start and end points of the loop. There are various situations
 *  that are more easily served by one type of loop over the others.
 *
 */

/**
 * For Loop
 *  A for loop repeats until a specified condition evaluates to false
 *
 *  for (initialization; condition; afterthought){
 *   statement
 *  }
 *
 */
    // example that uses include html to count the number of selected items
    function countSelected(selectedObject){
        let numberSelected =0;
        for(let i=0; i<selectedObject.options.length; i++){
            if(selectedObject.options[i].selected){
                numberSelected++;
            }
        }
        return numberSelected;
    }

    try {
        const btnLoopCount = document.getElementById('btnLoopCount');

        btnLoopCount.addEventListener("click", () => {
            const musicTypes = document.selectForm.musicTypes;
            console.log(`You have selected ${countSelected(musicTypes)} options(s).`);
            document.getElementById('selectedCount').innerHTML = countSelected(musicTypes).toString();
        });
    }catch (e) {
        if(e instanceof ReferenceError){
            // do Nothing since we can be in node and not imported into a web document
            // every time  for this scripting
        }
    }


/**
 * do...while statement
 *  repeats until a specified condition evaluates to false.
 *  do
 *      statement
 *   while (condition);
 */

    let doWhileCount = 0;
    do{
        doWhileCount += 1;
        console.log(doWhileCount);
    }while(doWhileCount < 5);

/**
 * While
 * executes its statements as long as a specified condition
 * evaluates to true
 *
 *  while(condition){
 *      statement
 *  }
 *
 *  ensure that your condition will eventually equal false
 *  otherwise an infinite loop will occur and the method run until
 *  the system runs out of memory
 *
 */

    let n= x = 0;
    while (n< 8){
        n++;
        x += n;
    }

    console.log(x, n);

/**
 * label statement  -- not used very often
 *  provides a statement with an identifier that lets you refer to
 *  it elsewhere in your program
 *
 *   you can use a label to identify a loop, and then use the break or
 *   continue statements to indicate whether a program should interrupt
 *   the loop or continue its execution
 *
 *
 *  label:
 *      statement
 */

    let theOuterMark =  theInnerMark = 0;

    markLoop:
        while(theOuterMark >= 0){
            theOuterMark++;
            doSomething();
            // if break were placed here with label it would not be benificail
            // as it is only closing the outer most loop
           while (theOuterMark >= 1){
               theOuterMark++;
               theInnerMark++;
               if (theInnerMark > 8){
                   console.log(`Broke out at inner = ${theInnerMark} outer = ${theOuterMark}`)
                   break markLoop; // break out of labeled loop
               }
           }
        }
/**
*   break statement
 *      terminate a loop, switch, or in conjunction with a
 *      labeled statement
 *
 *      break;   terminates the innermost enclosing loop or switch
 *      break label;  terminates the specified enclosing labeled statement
 *
 */

    const a = ['apple', 'banana','grape','orange'];
    const theValue = a[2];

    for(let i =0; i < a.length; i++){
        if(a[i] === theValue){
            console.log(`I'm outta here! ${a[i]}`)
            break;
        }
    }

    function doSomething(){
        console.log(('I did Something'));
    }


/**
 * continue
 *   can be used to restart a while, do-while, for, or label statement
 *
 *   continue
 *   continue label; -- rarely used
 */

    // normal
    let i = n = 0;
    while( i < 5){
        i++;
        if(i == 3){
            continue;
        }
        n += i;
        console.log(n);
    }

    // continue with label
    let c =0, j = 10;
    checkCandJ:
        while(c < 4){
            console.log(c);
            c += 1;
            checkJ:
            while(j > 4){
                console.log(j);
                j -=1;
                if(j % 2 === 0){
                    continue checkJ;
                }
                console.log(j, 'is odd');
            }
            console.log("c = ", c);
            console.log("j = ", j);
        }

/**
 * for...in statements
 *  statement iterates a specified variable over all the enumerable
 *  properties of an object.  For each distinct property, JavaScript
 *  executes the specified statements
 *
 *  for(variable in object){
 *      statement
 *  }
 *
 *  Do not use for in for arrays. this will return the name of user defined
 *  properties in addition to the numeric indexes. use tradition for loops
 */

    function getObjProps(obj, objName){
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
    }

    let apple = {color:'red', size:'small', taste:'sweet', name:'Apple'};

    console.log(getObjProps(apple,'Apple'));
    // Apple.color = red<br>Apple.size = small<br>Apple.taste = sweet<br>Apple.name = Apple<
    // br><hr>

    let appleArray = ['red','small','sweet', 'apple'];

    console.log(getObjProps(appleArray, 'AppleArray'));
    //AppleArray.0 = red<br>AppleArray.1 = small<br>AppleArray.2 = sweet<br>AppleArray.3 =
    // apple<br><hr>

/**
 * for..of
 *   creates a loop Iterating over iterable objects (including Array, Map, Set,
 *   arguments object and so on), invoking a custom iteration hook with statements
 *   to be executed for the value of each distinct property
 *
 *   for(variable of object){
 *       statement
 *
 *   }
 */

    // differences betweend for..in and for..of
    const array = [3,5,7];
    array.foo="hello";

    for(const i in array){
        console.log(i);
    }

    for(const i of array){
        console.log(i);
    }

    //destructuring example
    const destObj = {sample:1, example:2};

    for(const key in destObj){
        console.log(key);
    }

    for(const [key,val] of Object.entries(destObj)){
        console.log(key, val);
    }