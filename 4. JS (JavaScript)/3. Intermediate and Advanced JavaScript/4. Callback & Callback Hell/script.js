/* 

Array of Objects: This array holds user data with each object representing a user.

Each object contains three properties: name, age, and designation.

*/

const data = [

    { name: "Ajay Suneja", age: 30, designation: "Front End Web Developer" },

    { name: "Sunny Singh", age: 25, designation: "Back End Web Developer" }
];

/* 

Function to retrieve data (asynchronous).

getData uses setTimeout to simulate an asynchronous operation (e.g., fetching data from a server).

After a delay of 1 second (1000 ms), it iterates over the data array using the forEach method.

It then constructs a list of names and sets the innerHTML of the document's body to display the result.

*/

function getData() {

    setTimeout(() => {

        let output = ""; // Initialize an empty string to hold the list items.

        // Iterate over the array of data and construct list items (<li>) for each user name.

        data.forEach((user) => {

            output += `<li>${user.name}</li>`; // Append each user's name inside an <li> element.
        });

        // Update the document body with the constructed output (list of user names).

        document.body.innerHTML = output;

    }, 1000); // Simulate a 1-second delay before executing the function.
}

/* 

Function to add a new user to the data array (asynchronous).

createUser simulates adding a new user asynchronously after 2 seconds (2000 ms).

It accepts two arguments: the newUser object and a callback function.

After adding the new user to the data array, it calls the callback function.

*/

function createUser(newUser, callback) {

    setTimeout(() => {

        // Push the newUser object into the data array.

        data.push(newUser);

        // After adding the new user, invoke the callback function (getData) to refresh the displayed data.

        callback();

    }, 2000); // Simulate a 2-second delay before adding the new user and calling the callback.
}

// Call createUser and pass a new user object.

// Once the new user is added, the getData function is called as a callback to update the UI.

createUser({ name: "Manohar Batra", age: 35, designation: "Senior Software Engineer" }, getData); // This is the callback function passed to createUser

/* 

Callback Hell: This is a series of nested asynchronous operations where callbacks are executed one after another.

The getStudentData function contains multiple setTimeouts that run in sequence with a delay of 1 second for each.

Each setTimeout logs a piece of information to the console. This structure demonstrates "callback hell".

*/

const getStudentData = () => {

    // First asynchronous operation (after 1 second).

    setTimeout(() => {

        console.log("My first name is Heet.");

    }, 1000); // Delay of 1 second.

    // Second asynchronous operation (after 1 second).

    setTimeout(() => {

        console.log("My middle name is Ketan.");

    }, 1000); // Delay of 1 second.

    // Third asynchronous operation (after 1 second).

    setTimeout(() => {

        console.log("My last name is Gudhka.");

    }, 1000); // Delay of 1 second.

    // Fourth asynchronous operation (after 1 second).

    setTimeout(() => {

        console.log("I love coding.");

    }, 1000); // Delay of 1 second.

    // Fifth asynchronous operation (after 1 second).

    setTimeout(() => {

        console.log("I live in India.");

    }, 1000); // Delay of 1 second.
};

// Call the function to execute the sequence of setTimeout calls.

getStudentData();