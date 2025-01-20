/* 

8. Define the Pure function in JavaScript, which provided a suitable example of comparing pure and
impure functions.

Ans: A pure function is a function that:

Given the same input, always produces the same output.

Does not cause any side effects (e.g., modifying global variables, performing I/O operations, or mutating its arguments).

Pure functions are predictable and easier to test because their behavior is entirely determined by their input values.

*/

console.clear();

console.log("Pure and Impure Functions: ");

function addPure(a, b) {

    return a + b;
}

console.log(addPure(2, 3));

let total = 0;

function addImpure(a) {

    total += a;

    return total;
}

console.log(addImpure(2));

console.log(addImpure(3));