import { useState } from "react";

function App() {

  let [x, setX] = useState(10);

  return (

    <>

      <button onClick={() => {

        setX(x + 1);

      }}>Click me</button>

      {x}

    </>

  );
}

export default App;

// States are memory of a component, which is tightly coupled with the component behaviour. To update value of state variable, we cannot just use plain JS code, instead there are special setter function which we need to use to update the state variable. If we don't use setter functions to update the state's value then we will not see any impact on the UI layer.

// To make a state in react, we have a special hook called as useState. So, useState is a hook and using this we will be able to get a state variable inside the component. This function takes one argument i.e. initial value of the state variable. This useState hook returns us a 2 length array which has the following: useState,useEffect, useId, useRef and more...

// The first element is the state variable we wanted to create. The second element is the setter function to update the value of the state variable.

// In your react codebase, you will find a lot of functions which are serving a specific purpose. The functions can be inbuilt i.e. provided by react or you can make a custom one as well. These are called as React Hooks.