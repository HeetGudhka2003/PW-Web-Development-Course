import React from "react";

const LoginForm = (props) => {

    const { usernameRef, passwordRef, emailRef, onSubmit } = props;

    const handleInputChange = (e) => {

        console.log(e.target.value);
    };

    return (

        <form onSubmit={onSubmit}>

            <input

                type="text"

                name="username"

                id="username"

                placeholder="Enter your username"

                autoComplete="off"

                ref={usernameRef}

                onChange={handleInputChange}

                required
            />

            <br /> <br />

            <input

                type="password"

                name="password"

                id="password"

                placeholder="Enter your password"

                autoComplete="off"

                ref={passwordRef}

                onChange={handleInputChange}

                required

            />

            <br /> <br />

            <input

                type="email"

                name="email"

                id="email"

                placeholder="Enter your email"

                autoComplete="off"

                ref={emailRef}

                onChange={handleInputChange}

                required

            />

            <br /> <br />

            <button type="submit">Login</button>

        </form>
    );
};

export default LoginForm;