/*

5. How does the break statement work within a loop in JavaScript? Provide an example named "Breaking
the Loop at a Specific Condition" to demonstrate its functionality.

*/

console.clear();

for (let i = 1; ; i++) {

    if (i > 5) {

        console.log("Break the loop");

        break;
    }

    console.log("Iteration Number: " + i);
}

console.log("The loop has ended");