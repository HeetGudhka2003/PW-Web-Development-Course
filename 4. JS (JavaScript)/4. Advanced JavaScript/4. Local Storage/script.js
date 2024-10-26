// Local Storage in JavaScript

const studentBioData = {

    name: "Thapa Technical",

    age: 25,

    gender: "male",

    education: "B.Tech",

    address: {

        city: "Mumbai",

        state: "Maharashtra",

        country: "India"
    }
}

const addData = () => {

    // JSON.stringify() converts a JavaScript object or value to a JSON string. The type is a string.

    localStorage.setItem("student", JSON.stringify(studentBioData));

    console.log("Data added successfully");
}

document.getElementById("add-data").addEventListener("click", addData)

const getData = () => {

    // JSON.parse() converts a JSON string to a JavaScript object. The type is an object.

    const studentData = JSON.parse(localStorage.getItem("student"));

    console.log(studentData);
}

document.getElementById("get-data").addEventListener("click", getData)

const deleteData = () => {

    // removeItem() method removes the specified key and its value from localStorage.

    localStorage.removeItem("student");

    console.log("Data deleted successfully");
}

document.getElementById("delete-data").addEventListener("click", deleteData)