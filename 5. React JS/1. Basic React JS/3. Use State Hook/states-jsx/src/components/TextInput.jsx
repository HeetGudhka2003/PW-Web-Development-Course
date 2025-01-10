function TextInput({ label, type = "text", value, onChange }) {

    const inputStyle = {

        width: "100%",

        padding: "10px",

        fontSize: "16px",

        borderRadius: "5px",

        border: "1px solid #ccc",

        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    return (

        <div>

            <label>{label}</label>

            <input type={type} value={value} onChange={onChange} style={inputStyle} />

        </div>
    );
}

export default TextInput;  