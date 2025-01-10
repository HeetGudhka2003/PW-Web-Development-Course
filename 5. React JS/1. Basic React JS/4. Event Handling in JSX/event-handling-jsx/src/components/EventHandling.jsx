import styles from './EventHandling.module.css';

const EventHandling = () => {

    const handleButtonClick = (event) => {

        console.log(event);

        alert("Hey! I am onClick event handler");

    }

    return (

        <>

            <button onClick={(event) => handleButtonClick(event)} className={styles['click-btn']}>Click Me!</button>

            <br />

            <button onClick={(event) => handleButtonClick(event)} className={styles['click-btn']}>Click Me 2!</button>

        </>
    );
}

export default EventHandling;