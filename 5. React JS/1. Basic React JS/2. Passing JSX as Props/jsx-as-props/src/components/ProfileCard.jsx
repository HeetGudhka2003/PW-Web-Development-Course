import React from 'react';

const ProfileCard = (props) => {

    const { name, age, greeting, children } = props;

    return (

        <>

            <h2>Name: {name}</h2>

            <h2>Age: {age}</h2>

            {greeting}

            {children}

        </>
    )
}

export default ProfileCard;