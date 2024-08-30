// JavaScript data types are broadly categorized into primitive and non-primitive types. The primitive data types include Number, String, Boolean, Null, Undefined and Symbol. Non-primitive types include Arrays and Objects.

// Primitive data types

console.log("Primitive data types: ");

// Number is a special data type that can be used to represent integer or floating-point values.

let num1 = 10;

let num2 = 20.5;

console.log("The value of num1 is: ", num1);

console.log("The value of num2 is: ", num2);

// String is a special data type that can be used to represent text. It can be declared using single, double quotes or backticks.

let str = "Hello World";

console.log("The value of str is: ", str);

let str2 = 'Hello Javascript';

console.log("The value of str2 is: ", str2);

let str3 = `Hello PW Skills`;

console.log("The value of str3 is: ", str3);

// Boolean is a special data type that can be used to represent true or false values.

let bool = true;

console.log("The value of bool is: ", bool);

// Null  is a special value that represents the absence of a value means an empty value.

let nullVar = null;

console.log("The value of nullVar is: ", nullVar);

// Undefined means that a variable is declared but it has not been assigned a value.

let undefinedVar;

console.log("The value of undefinedVar is: ", undefinedVar);

// BigInt is a special data type that can be used to represent integer values greater than 2^53-1.

let bigInt = 9007199254740991n;

console.log("The value of bigInt is: ", bigInt);

console.log("Non-primitive data types: ");

// Object is a special data type that can be used to represent collections of properties.

let obj1 = {

    name: "John",
    
    age: 30
};

console.log("The value of obj1 is: ", obj1);

// Array is a special data type that can be used to represent collections of values of same data type.

let arr1 = [1, 2, 3, 4, 5];

let arr2 = ['Hello', 'World'];

console.log("The value of arr is: ", arr1);

console.log("The value of arr2 is: ", arr2);