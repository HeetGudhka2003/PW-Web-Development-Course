// Conditional Statements in JavaScript are used to perform different actions based on different conditions.

// If Statement

let dividend = 10;

let divisor = 5;

if (divisor != 0) {

    let result = dividend / divisor;

    console.log("The result is: " + result);
}

// If Else Statement

let age = 18;

if (age >= 18) {

    console.log("You are an adult.");
}

else {

    console.log("You are still a child.");
}

// Nested If Else Statements

let number = 4;

if (number == 0) {

    console.log("Zero is neither odd number nor an even number.");
}

else if (number % 2 == 0) {

    console.log(number + " is an even number.");
}

else {

    console.log(number + " is an odd number.");
}