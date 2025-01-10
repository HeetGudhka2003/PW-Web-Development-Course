import React, { useRef } from "react";

import "./useReference.css";

import LoginForm from "./LoginForm.jsx";

const useReference = () => {

    const usernameRef = useRef();

    const passwordRef = useRef();

    const emailRef = useRef();

    const handleFormSubmit = (e) => {

        e.preventDefault();

        console.log("Username:", usernameRef.current.value);

        console.log("Password:", passwordRef.current.value);

        console.log("Email:", emailRef.current.value);

        // Clear input fields after logging

        usernameRef.current.value = "";

        passwordRef.current.value = "";

        emailRef.current.value = "";
    };

    return (

        <>

            <h1>UseRef Example</h1>

            <LoginForm

                usernameRef={usernameRef}

                passwordRef={passwordRef}

                emailRef={emailRef}

                onSubmit={handleFormSubmit}
            />
        </>
    );
};

export default useReference;