function Button({ onClick, buttonType = "button", text }) {

    const buttonStyle = {

        padding: "10px 15px",

        fontSize: "16px",

        backgroundColor: "#007BFF",

        color: "#fff",

        border: "none",

        borderRadius: "5px",

        cursor: "pointer",

        margin: "5px",
    };

    return (

        <button type={buttonType} onClick={onClick} style={buttonStyle}>

            {text}

        </button>

    );
}

export default Button;