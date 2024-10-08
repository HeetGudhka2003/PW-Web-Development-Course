/*

=====================================================================

                Arrays Interview Questions

=====================================================================

*/

/*

1. Add "December" to the end of the array

*/

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];

months.splice(months.length, 0, "December");

console.log(months);

/*

2. Update the value of "March" to "march"

*/

months.splice(2, 1, "march");

console.log(months);

/*

3. Delete "April" from the array

*/

months.splice(3, 1);

console.log(months);

/*

4. Given an array of products where each product has a name and a price. Write a function that uses filter to return only the products that have a price less than 500.

*/

const products = [

    {
        name: "Laptop",
        price: 1200
    },

    {
        name: "Phone",
        price: 800
    },

    {
        name: "Tablet",
        price: 300
    },

    {
        name: "Smart Watch",
        price: 150
    }
]

const filteredProducts = products.filter((currentProduct) => { currentProduct.price < 500; })

// currentProduct Value is 1200 < 500 = false

// currentProduct Value is 800 < 500 = true

// currentProduct Value is 300 < 500 = true

// currentProduct Value is 150 < 500 = true

console.log(filteredProducts);

/*

5. Filter unique values from an array

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const uniqueValues = numbers.filter((currentNumber, index) => {

    return numbers.indexOf(currentNumber) === index;
})

console.log(uniqueValues);

// Using Set Method: It will remove all duplicate values, includes only unique values and returns a new array.

const uniqueValues2 = [...new Set(numbers)];

console.log(uniqueValues2);

/*

6. Use map() to add 5 to each element in the array

*/

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addNumbers = newNumbers.map((currentNumber) => {

    return currentNumber + 5;
});


console.log(addNumbers);

// Current value of currentNumber is 1 + 5 = 6

// Current value of currentNumber is 2 + 5 = 7

// Current value of currentNumber is 3 + 5 = 8

// Current value of currentNumber is 4 + 5 = 9

// Current value of currentNumber is 5 + 5 = 10

// Current value of currentNumber is 6 + 5 = 11

// Current value of currentNumber is 7 + 5 = 12

// Current value of currentNumber is 8 + 5 = 13

// Current value of currentNumber is 9 + 5 = 14

// Current value of currentNumber is 10 + 5 = 15

/*

7. Use reduce() to sum up all the elements in the array

*/

const sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = sumArray.reduce((accumulator, currentElement) => {

    return accumulator + currentElement;

}, 0);

// Initial value of accumulator is 0 + 1 = 1

// Initial value of accumulator is 1 + 2 = 3

// Initial value of accumulator is 3 + 3 = 6

// Initial value of accumulator is 6 + 4 = 10

// Initial value of accumulator is 10 + 5 = 15

// Initial value of accumulator is 15 + 6 = 21

// Initial value of accumulator is 21 + 7 = 28

// Initial value of accumulator is 28 + 8 = 36

// Initial value of accumulator is 36 + 9 = 45

// Initial value of accumulator is 45 + 10 = 55

console.log(sum);