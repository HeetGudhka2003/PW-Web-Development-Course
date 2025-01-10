import { useState } from "react";

const HowNotToFetchAPI = () => {

    const [apiData, setApiData] = useState([])

    fetch("https://jsonplaceholder.typicode.com/posts")

        .then(response => response.json())

        .then(data => setApiData(data))

        .catch(error => console.log(error))

    return (

        <>

            <h1>How not to fetch API data</h1>

            <h2>

                Data:

                {
                    apiData.map(data => <li key={data.id}>{data.title}</li>)
                }

            </h2>

        </>
    )
}

export default HowNotToFetchAPI;