/* 

Question 3: What are loops, and why do we need them? Explain different types of loops with their syntax and examples.

Ans: Loops are programming constructs that allow you to execute a block of code repeatedly until a certain condition is met. They are useful for tasks that require repetition, such as iterating over a collection of data.

Different types of loops include:

1. For Loop

2. While Loop

3. Do-While Loop

4. For-in Loop

5. For-of Loop

Sytax and Examples:

*/

// For Loop

console.log("For Loop:");

for (let i = 0; i < 5; i++) {

    console.log(i);
}

// While Loop

console.log("While Loop: ");

let i = 5;

while (i < 10) {

    console.log(i);

    i++;
}

// Do-While Loop

console.log("Do-While Loop: ");

let j = 15;

do {

    console.log(j);

    j++;

} while (j < 20);

// For-in Loop

console.log("For-in Loop: ");

const person = {name: "John", age: 30, city: "New York"};

for (let key in person) {

    console.log(key + ": " + person[key]);
}

// For-of Loop

console.log("For-of Loop: ");

let numbers = [2, 4, 6, 8, 10];

for (let num of numbers) {

    console.log(num);
}