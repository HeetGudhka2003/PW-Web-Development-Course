import React from 'react';

import ProfileCard from './ProfileCard.jsx';

const Profile = () => {

    return (

        <div>

            <ProfileCard

                name="John Doe"

                age={25}

                greeting={

                    <div>

                        <strong>Hello! Good Morning!</strong>

                    </div>
                }
            >
                <p>Hobbies: Biking, Reading, Coding</p>

                <button>Contact Me</button>

            </ProfileCard>

            <ProfileCard

                name="Jane Smith"

                age={30}

                greeting={

                    <div>

                        <strong>Hello! Good Evening!</strong>

                    </div>
                }
            >
                <p>Hobbies: Singing, Dancing, Cooking</p>

                <button>Contact Me</button>

            </ProfileCard>

        </div>
    );
}

export default Profile;