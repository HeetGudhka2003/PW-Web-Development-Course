/*

7. For a given array of 10 students' ages i.e 19, 22, 19, 24, 20, 25, 26, 24, 25, 24

Sort the array and find the min and max age

Find the median age (one middle item or two middle items divided by two)

Find the average age (all items divided by the number of items)

Find the range of the ages(max minus min)

Compare the value of (min - average) and (max - average), using abs() method

*/

console.clear();

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort((a, b) => a - b);

console.log("Sorted ages: ", sortedAges);

const minAge = sortedAges[0];

const maxAge = sortedAges[sortedAges.length - 1];

console.log("Minimum age: ", minAge);

console.log("Maximum age: ", maxAge);

const medianAge = sortedAges[Math.floor(sortedAges.length / 2)];

console.log("Median age: ", medianAge);

const averageAge = sortedAges.reduce((a, b) => a + b, 0) / sortedAges.length;

console.log("Average age: ", averageAge);

const rangeAge = maxAge - minAge;

console.log("Range age: ", rangeAge);

const difference = Math.abs(minAge - averageAge) + Math.abs(maxAge - averageAge);

console.log("Difference: ", difference);