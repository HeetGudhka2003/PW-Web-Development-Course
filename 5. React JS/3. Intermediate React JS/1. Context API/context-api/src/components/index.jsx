import { createContext, use } from "react";

// 1 step

const BioContext = createContext();

export { BioContext };

// 2nd step

const BioProvider = ({ children }) => {

    const myName = "vinod";

    const myAge = 30;

    console.log(children);

    return (

        <BioContext.Provider value={{ myName, myAge }}>

            {children}

        </BioContext.Provider>
    );
};

export default BioProvider;

// custom hooks

const useBioContext = () => {

    const context = use(BioContext);

    if (context === undefined) {

        throw new Error("Component must be wrapped with BioProvider");
    }

    return context;
};

export { useBioContext };