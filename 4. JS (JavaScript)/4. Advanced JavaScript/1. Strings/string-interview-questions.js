console.clear();

/*

=====================================================================

                Strings Interview Questions

=====================================================================

*/

/*

1. Write a JavaScript function that prints letters 'a' to 'z' in alphabetical order. You should use a loop to iterate through the letters and print each letter on a new line.

*/

for (let char = 97; char <= 122; char++) {

    console.log(String.fromCharCode(char));
}

/*

2. Write a function to count the number of vowels in a string.

*/

function countVowels(str) {

    let count = 0;

    for (let char of str) {

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {

            count++;

        }
    }

    return count;
}

let result = countVowels("Hello World");

console.log("The number of vowels in the string is: " + result);