import { useState, useEffect } from "react";

const useEffectChallenge = () => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    const handleInputChange = (e) => setName(e.target.value);

    useEffect(() => {

        console.log(name);

    }, [name])

    useEffect(() => {

        document.title = `Count: ${count}`;

    }, [count])

    return (

        <>

            <h1>Use Effect Challenge</h1>

            <p>Count: <span>{count}</span></p>

            <button onClick={() => setCount(count + 1)}>Increment</button>

            <br /> <br />

            <p>Name: <span>{name}</span></p>

            <input type="text" id="name" autoComplete="off" placeholder="Enter your name" value={name} onChange={handleInputChange} required />

        </>
    )
}

export default useEffectChallenge;