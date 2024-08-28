// 👉 Loops are used to repeatedly run a block of code.

// 👉 There are three types of loops in JavaScript: for, while and do-while.

// 👉 For Loop: We use for loop to run a piece of code until the set condition turns false.

// 👉 For example: 👇

console.log("For Loop");

console.log("Example 1:");

for (let i = 0; i < 2; i++) {

    let Name = "PW Skills";

    console.log(Name);
}

console.log("Example 2:");

for (let i = 2; i <= 20; i += 2) {

    console.log(i);
}

// 👉 While Loop: This loop keeps on running as long as the condition is true.

// 👉 For example: 👇

console.log("While Loop");

console.log("Example 1:");

let i = 1;

while (i < 10) {

    console.log(i);

    i++;
}

console.log("Example 2:");

let j = 10;

while (j > 0) {

    console.log(j);

    j--;
}

// 👉 Do-While Loop: This loop will always run at least once, even if the condition is false.

// 👉 For example: 👇

console.log("Do-While Loop");

console.log("Example 1:");

let result = '';

let k = 0;

do {

    k = k + 1;

    result = result + k;

} while (k < 7);

console.log(result);

// 👉 When to use which loop?

// 👉 Use for loops when you know the number of iterations or the range of values.

// 👉 Use while loops when you don't know the number of iterations or where the termination condition is based on a dynamic condition.

// 👉 Use do-while loops when you want to execute a block of code at least once, even if the condition is false.