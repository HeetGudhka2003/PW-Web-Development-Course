import { useBioContext } from ".";

const Home = () => {

    const { myName, myAge } = useBioContext();

    return (

        <section>

            <h1>Hello Context API. My name is {myName}. I am {myAge} yrs old.</h1>

        </section>
    );
};

export default Home;