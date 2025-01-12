/*

3. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/ height * height

*/

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("calculateBMI").addEventListener("click", function (event) {

        event.preventDefault();

        let weight = document.getElementById("weight").value;

        let height = document.getElementById("height").value;

        let BMI = weight / (height * height);

        document.getElementById("result").innerHTML = `Your BMI is ${BMI.toFixed(2)} kg/m<sup>2</sup>`;

        document.getElementById("reset").addEventListener("click", function () {

            document.getElementById("result").innerHTML = "";

            document.getElementById("weight").value = "";

            document.getElementById("height").value = "";
        });

    });
});