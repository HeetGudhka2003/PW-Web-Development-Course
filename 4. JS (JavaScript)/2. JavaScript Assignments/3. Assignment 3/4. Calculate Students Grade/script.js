document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('showResult').addEventListener('click', (event) => {

        event.preventDefault();

        let marks = document.getElementById("marks").value;

        if (isNaN(marks) || marks < 0 || marks > 100) {

            alert("Marks must be a number between 0 to 100");

            return;
        }

        let grade = document.getElementById("grade");

        if (marks > 90 && marks <= 100) {

            grade.innerHTML = `Your Grade is A`;
        }

        else if (marks > 70 && marks <= 90) {

            grade.innerHTML = `Your Grade is B`;
        }

        else if (marks > 50 && marks <= 70) {

            grade.innerHTML = `Your Grade is C`;
        }

        else {

            grade.innerHTML = `Fail`;
        }
    });
});