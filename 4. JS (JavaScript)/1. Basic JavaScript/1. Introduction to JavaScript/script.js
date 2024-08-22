/* 

JavaScript is a programming language that is used to build web applications. It is a client side scripting language, which means it is executed by the web browser rather than on a server.

 Keywords are the reserved words that are part of the syntax and they cannot be used in the form of variables, functions, classes or objects etc. They convey a special meaning to the compiler. For example: let, var, const, function, class etc.

 Variables are used to store data values. They can be changed or updated. The data value can be a number, a string, a boolean, an array or an object. It is advised to name variables in camelCase. You can create variables by using let, var and const.

 */

// Rules for naming variables:

/*

1. Variable names can only contain alpha-numeric characters and underscores (A-z, 0-9, _).

2. Variable names must begin with a letter or an underscore (_).

3. Variable names are case-sensitive.

4. Variable names should not be JS keywords.

*/

let movieName = "Harry Potter";

var movieDescription = "Harry Potter and the Philosopher's Stone";

const moviePrice = 300;

console.log(movieName);

console.log(movieDescription);

console.log(moviePrice);

// console.log() is used to print the output in the console.

/*

Difference Between Let Var & Const

1. var is globally scoped while let and const are block scoped.

2. var can be updated and redeclared.

3. let can be updated but not redeclared.

4. const can neither be updated nor be redeclared.

5. var variables are initialized with the undefined values whereas let and const variables are not initialized.

6. const must be initialized during declaration unlike let and var.

*/