import { useState } from "react";

import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {

    const [value, setValue] = useState("");

    const [inputType, setInputType] = useState("password");

    const handleFormSubmit = (event) => {

        event.preventDefault();

        console.log("Form submitted: " + value);

        if (onSubmit) {

            onSubmit(value);
        }
    };

    const handleInputChange = (event) => {

        console.log(event.target.value);

        setValue(event.target.value);
    };

    return (

        <TextInputForm

            handleFormSubmit={handleFormSubmit}

            handleInputChange={handleInputChange}

            value={value}

            inputType={inputType}

            setInputType={setInputType}
        />
    );
}

export default TextInputFormContainer;