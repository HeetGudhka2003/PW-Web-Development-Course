/*

6. Write a JavaScript function (the function should be Function declaration) called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.

Dummy Tax rates are given below 


Low = 0.1

Medium = 0.2

High = 0.3

*/

function calculateTax(income) {

    const getTaxRate = (

        function () {

            // Tax rates

            const taxRates = {

                low: 0.1,

                medium: 0.2,

                high: 0.3
            };

            // Return tax rates based on income

            return function (income) {

                if (income <= 50000) {

                    return taxRates.low;
                }

                else if (income <= 100000) {

                    return taxRates.medium;
                }

                else {

                    return taxRates.high;
                }
            };

        })();

        // Calculate tax

        const taxRate = getTaxRate(income);

        return income * taxRate;
}

console.log(calculateTax(30000));

console.log(calculateTax(75000));

console.log(calculateTax(150000));