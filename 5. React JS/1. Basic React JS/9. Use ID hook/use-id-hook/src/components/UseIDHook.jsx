import { useId } from "react";

const useIDHook = () => {

    const usernameID = useId();

    const emailID = useId();

    const passwordID = useId();

    return (

        <>

            <form>

                <div>

                    <label htmlFor={usernameID}>Username: </label>

                    <input type="text" name="username" id={usernameID} />

                </div>

                <br />

                <div>

                    <label htmlFor={emailID}>Email: </label>

                    <input type="email" name="email" id={emailID} />

                </div>

                <br />

                <div>

                    <label htmlFor={passwordID}>Password: </label>

                    <input type="password" name="password" id={passwordID} />

                </div>

                <br />

                <button type="submit">Login</button>

            </form>

        </>

    )

}

export default useIDHook;

// Important Points:

/*

1. useId hook does not accept any parameters.

2. useId hook returns a unique ID string associated with this particular useId call in the particular component.

3. useId should not be used to generate keys in a list or table.

*/