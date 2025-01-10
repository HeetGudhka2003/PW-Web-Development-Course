// Wait for the DOM to load before executing the script

document.addEventListener("DOMContentLoaded", function () {

    // Target the form and output div

    let form = document.getElementById("registrationForm");

    let outputDiv = document.getElementById("output");

    // Add event listener to the form submission

    form.addEventListener("submit", function (event) {

        // Prevent the default form submission (which would reload the page)

        event.preventDefault();

        // Target the input elements and get their values

        let username = document.getElementById("username").value;

        let password = document.getElementById("password").value;

        // If either field is empty, show an alert and clear the output

        if (username === "" || password === "") {

            alert("Both username and password are required!");

            outputDiv.innerHTML = "";  // Clear any previous output

        } else {

            // Display the entered values in the DOM

            outputDiv.innerHTML = `

                <h2>Entered Values:</h2>

                <p><strong>Username:</strong> ${username}</p>
                
                <p><strong>Password:</strong> ${password}</p>
            `;
        }
    });
});