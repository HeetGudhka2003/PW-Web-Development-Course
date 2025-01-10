import { useEffect, useState } from "react";

const HowToFetchAPI = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")

            .then(response => response.json())

            .then(data => setApiData(data))

            .catch(error => console.log(error))

    }, [])

    return (

        <>

            <h1>How to fetch API data</h1>

            <h2>

                Data:

                {
                    apiData.map(data => <li key={data.id}>{data.title}</li>)
                }

            </h2>

        </>
    )
}

export default HowToFetchAPI;