/*

2. Explain how explicit type conversion differs from implicit type conversion in JavaScript. Also, provide a supporting example.

Ans: In JavaScript, explicit type conversion and implicit type conversion refer to how data types are converted from one type to another, but they differ in how the conversion occurs. 

Implicit Type Conversion automatically converts the value to the target data type.

Explicit Type Conversion requires the use of a function or operator to convert the value to the target data type.

*/

// Example 1: Implicit Type Conversion

let result = '5' + 2;  // '5' is a string, 2 is a number

console.log(result);  // Output: '52' (number 2 is coerced into a string and concatenated with '5')

// Example 2: Explicit Type Conversion

let num = '123';

let convertedNum = Number(num);  // Explicit conversion from string to number

console.log(convertedNum);  // Output: 123 (as a number)