console.clear();

/*  

Promises in JavaScript: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more powerful and flexible way to handle asynchronous operations compared to traditional callbacks. They allow you to write asynchronous code in a more synchronous manner, improving readability and maintainability.

A Promise has three states:

1. Pending: The initial state of the Promise, before the asynchronous operation has completed.

2. Fulfilled: The state when the asynchronous operation completes successfully, and the Promise is resolved with a value.

3. Rejected: The state when the asynchronous operation fails, and the Promise is rejected with a reason (error).

Promises offer three main methods to handle the results of the asynchronous operation:

1. .then(): Used to define what should happen when the Promise is fulfilled.

2. .catch(): Used to define what should happen when the Promise is rejected.

3. .finally(): Used to define what should happen when the Promise is either fulfilled or rejected.

*/

let myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("The operation was successful.");
    }

    else {

        reject("The operation failed.");
    }
});

myPromise

    .then(result => console.log(result))

    .catch(error => console.log(error))

    .finally(() => console.log("Operation completed."));

/*

Promises consits of the following methods:

1. Promise.all() is used to wait for all the promises to complete successfully. Reject state will throw an error.

2. Promise.race() is used to wait for the first promise to complete successfully regardless of the success or failure.

3. Promise.allSettled() is used to wait for all the promises to complete successfully and to get the results regardless of the success or failure.

*/

const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => resolve("Promise 1"), 1000);

});

const promise2 = new Promise((resolve, reject) => {

    setTimeout(() => resolve("Promise 2"), 2000);

});

const promise3 = new Promise((resolve, reject) => {

    setTimeout(() => resolve("Promise 3"), 3000);

});

Promise.all([promise1, promise2, promise3])

    .then(result => console.log(result))

    .catch(error => console.log(error))

    .finally(() => console.log("Operation completed."));