/*

Question 1: What are conditional statements? Explain conditional statements with syntax and examples.

Ans: Conditional statements are programming constructs that allow you to make decisions in your code based on certain conditions. These statements execute different blocks of code depending on whether a given condition is true or false.

Types of Conditional Statements

1. if Statement: The if statement is the simplest form of a conditional statement. It executes a block of code only if the specified condition is true.

2. if else Statement: The if else statement provides an alternative block of code to execute if the condition is false.

3. else if Ladder: The else if ladder statement allows you to specify multiple alternative blocks of code to execute if the first condition is false.

Syntax as well as examples are shown below:

*/

// if statement

let dividend = 10;

let divisor = 5;

if (divisor != 0) {

    let result = dividend / divisor;

    console.log("The result is: " + result);
}

// if else statement

let age = 16;

if (age >= 18) {

    console.log("You are eligible to vote.");
} 

else {

    console.log("You are not eligible to vote.");
}

// else if ladder

let score = 85;

if (score >= 90) {

    console.log("Grade A");
} 

else if (score >= 80) {

    console.log("Grade B");
}

else if (score >= 70) {

    console.log("Grade C");
} 

else {

    console.log("Grade D");
}