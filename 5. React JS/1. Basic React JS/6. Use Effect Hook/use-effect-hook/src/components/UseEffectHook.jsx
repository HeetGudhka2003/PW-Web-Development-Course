import { useState, useEffect } from "react";

const UseEffectHook = () => {

    const [date, setDate] = useState();

    useEffect(() => {

        const intervalId = setInterval(() => {

            const currentDate = new Date();

            setDate(currentDate.toLocaleTimeString());

        }, 1000);

        // Cleanup function to clear the interval

        return () => clearInterval(intervalId);

    }, []);

    return (

        <>

            <h1>Use Effect Hook</h1>

            <h2>{date}</h2>

        </>
    );
};

export default UseEffectHook;