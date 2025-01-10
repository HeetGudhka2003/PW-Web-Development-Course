import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./LoginForm.css";

const LoginForm = () => {

    // Handling State

    const [user, setUser] = useState({

        firstName: "",

        lastName: "",

        email: "",

        password: ""

    });

    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    const handleFormSubmit = (event) => {

        event.preventDefault();

        setUser({

            firstName: "",

            lastName: "",

            email: "",

            password: ""

        });

        console.log(user);
    };

    const togglePasswordVisibility = () => {

        setShowPassword(!showPassword);
    };

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

                    value={user.firstName}

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

                    value={user.lastName}

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

                    value={user.email}

                    onChange={handleInputChange}

                    autoComplete="off"

                    id="email"

                    required
                />

                <label htmlFor="password">

                    <b>Password: </b>

                </label>

                <div className="password-container">

                    <input

                        type={showPassword ? "text" : "password"} // Toggle input type

                        name="password"

                        placeholder="Enter Password"

                        value={user.password}

                        onChange={handleInputChange}

                        autoComplete="off"

                        id="password"

                        required

                    />

                    <span onClick={togglePasswordVisibility} className="toggle-icon">

                        {showPassword ? <FaEyeSlash /> : <FaEye />}

                    </span>

                </div>

                <p>

                    By creating an account you agree to our <a href="#">Terms & Privacy</a>

                </p>

                <div className="clearfix">

                    <button type="submit" className="signupbtn">Sign Up</button>

                </div>

            </div>

        </form>
    );
};

export default LoginForm;