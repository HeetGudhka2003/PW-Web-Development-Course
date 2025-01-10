import { useState } from "react";

import "./LoginForm.css";

const LoginForm = () => {

    // Handling States

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleInputChange = (event) => {

        const { key, value } = event.target;

        switch (key) {

            case "firstName":

                setFirstName(value);

                break;

            case "lastName":

                setLastName(value);

                break;

            case "email":

                setEmail(value);

                break;

            case "password":

                setPassword(value);

                break;
        }
    }

    const handleFormSubmit = (event) => {

        event.preventDefault();

        const formData = {

            firstName,

            lastName,

            email,

            password
        }

        console.log(formData);
    }

    return (

        <form onSubmit={handleFormSubmit}>

            <div className="form-container">

                <h1>Sign Up</h1>

                <p>Please fill in this form to create an account!</p>

                <label htmlFor="firstName">

                    <b>First Name: </b>

                </label>

                <input

                    type="text"

                    name="firstName"

                    placeholder="Enter First Name"

                    value={firstName}

                    onChange={handleInputChange}

                    autoComplete="off"

                    id="firstName"

                    required

                />

                <label htmlFor="lastName">

                    <b>Last Name: </b>

                </label>

                <input

                    type="text"

                    name="lastName"

                    placeholder="Enter Last Name"

                    value={lastName}

                    onChange={handleInputChange}

                    autoComplete="off"

                    id="lastName"

                    required

                />

                <label htmlFor="email">

                    <b>Email: </b>

                </label>

                <input

                    type="email"

                    name="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={handleInputChange}

                    autoComplete="off"

                    id="email"

                    required

                />

                <label htmlFor="password">

                    <b>Password: </b>

                </label>

                <input

                    type="password"

                    name="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={handleInputChange}

                    autoComplete="off"

                    id="password"

                    required

                />

                <p>

                    By creating an account you agree to our <a href="#">Terms & Privacy</a>

                </p>

                <div className="clearfix">

                    <button type="submit" className="signupbtn">Sign Up</button>

                </div>

            </div>

        </form>
    )
}

export default LoginForm;