import styles from './EventProps.module.css';

const EventProps = () => {

    const handleWelcomeUser = (name) => {

        alert(`Hey, ${name}`);
    }


    const handleHover = () => {

        alert("Hovered");
    }

    return (

        <>

            <WelcomeUser onClick={() => handleWelcomeUser("Heet")} onMouseEnter={handleHover} />

        </>
    )
}

const WelcomeUser = (props) => {

    const { onClick, onMouseEnter } = props;

    const handleGreeting = () => {

        alert("Hello");

        onClick();
    }

    return (

        <>

            <button onClick={onClick} className={styles['click-btn']}>Click Me!</button>

            <button onMouseEnter={onMouseEnter} className={styles['click-btn']}>Hover Me!</button>

            <button onClick={handleGreeting} className={styles['click-btn']}>Greet Me!</button>

        </>
    )
}

export default EventProps;