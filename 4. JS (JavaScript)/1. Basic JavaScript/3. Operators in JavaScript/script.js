// Operators in JavaScript

// Operators are the special symbols that are used to perform operations on variables and values. There are various types of operators viz arithmetic operators, assignment operators, comparison operators, logical operators, ternary operators and so on.

// Arithmetic Operators are used to perform mathematical operations.

console.log("Arithmetic Operators:");

let a = 20;

let b = 10;

console.log(a + b); // Addition

console.log(a - b); // Subtraction

console.log(a * b); // Multiplication

console.log(a / b); // Division

console.log(a % b); // Modulus (Remainder)

console.log(a ** b); // Exponent (Power)

// Assignment Operators are used to assign values to variables.

console.log("Assignment Operators:");

let c = 100;

console.log(c += 50); // c = c + 50 - Add and Assign

console.log(c -= 50); // c = c - 50 - Subtract and Assign

console.log(c *= 50); // c = c * 50 - Multiply and Assign

console.log(c /= 50); // c = c / 50 - Divide and Assign

console.log(c %= 50); // c = c % 50 - Modulus and Assign

// Comparison Operators also known as Relational Operators are used to compare two values. It gives the output in the form of boolean as true or false.

console.log("Comparison Operators:");

let d = 30;

let e = 40;

console.log(d > e); // Greater than

console.log(d < e); // Less than

console.log(d >= e); // Greater than or equal to

console.log(d <= e); // Less than or equal to

console.log(d == e); // Equal to

console.log(d != e); // Not equal to

// Logical Operators are used to perform logical operations and returns a boolean value true or false.

console.log("Logical Operators:");

let f = 50;

let g = 60;

console.log(f > g && f < g); // Logical AND: If both conditions are true, then the result is true else result is false.

console.log(f > g || f < g); // Logical OR: If either condition is true, then the result is true else result is false.

console.log(!(f > g)); // Logical NOT: If the condition is true, then the result is false else result is true.

console.log("Bitwise Operators:");

// Bitwise Operators are used to perform bitwise operations. It returns the result in the form of decimal number.

let h = 70;

let i = 80;

console.log(h & i); // Bitwise AND

console.log(h | i); // Bitwise OR

console.log(h ^ i); // Bitwise XOR

console.log(~i); // Bitwise NOT

console.log(h << i); // Bitwise Left Shift

console.log(h >> i); // Bitwise Right Shift