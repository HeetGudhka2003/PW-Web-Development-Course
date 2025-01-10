import TextInput from "./TextInput";

import Button from "./Button";

function TextInputForm({ handleFormSubmit, handleInputChange, value, inputType, setInputType }) {

    return (

        <form onSubmit={handleFormSubmit}>

            <div>

                <TextInput

                    label="Enter a word or phrase"

                    type={inputType}

                    value={value}

                    onChange={handleInputChange}

                />

            </div>

            <div>

                <Button

                    text={inputType === "password" ? "Show" : "Hide"}

                    onClick={() => setInputType(inputType === "password" ? "text" : "password")}

                />

            </div>

            <div>

                <Button text="OK" buttonType="submit" />

            </div>

        </form>

    );
}

export default TextInputForm;