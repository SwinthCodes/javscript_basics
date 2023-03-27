/**
 * Promises
 *      A Promise is an object representing the eventual completion or failure
 *      of an asynchronous operation and its resulting value.
 *      
 *      Essentially, a promise is a returned object to which you attach callbacks,
 *       instead of passing callbacks into a function.
 * 
 *       A Promise is in one of these states:
 *         - pending: initial state, neither fulfilled nor rejected.
 *         - fulfilled: meaning that the operation was completed successfully.
 *         - rejected: meaning that the operation failed.
 *      
 *      As a rule of thumb, whenever your operation encounters a promise, return it 
 *      and defer its handling to the next then handler
 */

doSomething = () => {
    return new Promise((resolve, reject) => {
        // do a thing, possibly async, then...
        if (true) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });
}

doSomething().then((result) => {
    console.log(result); // "Stuff worked!"
}, (err) => {    
    console.log(err); // Error: "It broke"
});


/**
 * Errror Handling
 *     If you don't provide a rejection handler, the promise will silently fail.
 *      This is a good thing, because it allows you to handle errors in a single
 *      place, at the bottom of a promise chain, instead of having to handle errors
 *      at every step of the chain.
 * 
 *      If you do provide a rejection handler, it will be called when the promise is
 *      rejected, and the rejection reason will be passed to the rejection handler.
 * 
 */

doSomething().then((result) => {
    console.log(result); // "Stuff worked!"
}).catch((err) => {
    console.log(err); // Error: "It broke"
});


/**
 * Async/Await
 *   Async functions are a new feature in ES2017 that allow you to write asynchronous
 *      code that looks synchronous. Async functions are a combination of promises and
 *      generators. Async functions are a new way to write promises based code. If you
 *      find promises confusing, you probably shouldn't use async functions.
 * 
 *    Async functions always return a value. If the value returned is a promise, the
 *     async function will "pause" in a resolved or rejected state until the promise
 *     is resolved or rejected, and then the resulting value will be returned.
 * 
 */

async function doSomethingAsync() {
    return "I did something";
}

doSomethingAsync().then((value) => {
    console.log(value); // "I did something"
});


/**
 * Composition  
 *  There are four composition tools for running asynchronous operations concurrently: 
 *      Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race().
 * 
 */

// Promise.all() - waits for all promises to be resolved or for one to be rejected.
// If a promise is rejected, Promise.all immediately rejects with the value of the promise.
// If all promises are resolved, Promise.all returns an array of the resolved values in the same order as the original iterable of promises.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("all: ",values); // [3, 42, "foo"]
});

// Promise.allSettled() - waits for all of the given promises to either fulfill or reject, 
// and returns an array of objects that each describes the outcome of each promise.

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    let count = 0
    results.forEach((result) => {
        count++;
        console.log('Resolved Promise # ', count);
        console.log( result.status);
        console.log( result.value);
        console.log( result.reason);
    });
});

// Promise.any() - waits for any of the given promises to be fulfilled or for all to be
// rejected. If any promise is fulfilled, the first fulfilled value is returned. If all 
// promises are rejected, the returned promise is rejected with an AggregateError, a new 
// subclass of Error that groups together individual errors.

Promise.any([promise1, promise2, promise3]).then((firstValue) => {
    console.log('any: ', firstValue); // 3
});

//Promise.race()) - waits for any of the given promises to be fulfilled or rejected, and
// returns the value from the first settled promise.

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log('race: ', value); // 3
});