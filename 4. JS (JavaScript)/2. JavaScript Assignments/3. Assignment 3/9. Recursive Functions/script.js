/*

9. What distinguishes a recursive function in JavaScript? Write a program to solve the Fibonacci series of a given n number.

Ans: A recursive function in JavaScript is a function that calls itself during its execution. This technique is used to solve problems that can be broken down into smaller, similar problems. Recursion continues until a base case is met, preventing infinite recursion.

*/

console.clear();

function fibonacciSeries(n) {

    // Check if n is a positive integer

    if (n <= 0) {

        return [];
    }

    // Check if n is 1

    if (n === 1) {

        return [0];
    }

    // Check if n is 2

    if (n === 2) {

        return [0, 1];
    }

    // Initialize the series

    let series = [0, 1];

    // Generate the rest of the series

    for (let i = 2; i < n; i++) {

        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

// Example usage:

const n = 10; // Change this to any number you want

console.log(`Fibonacci series up to ${n}:`, fibonacciSeries(n));