const PropDrilling = () => {

    return (

        <>

            <h1>Component A</h1>

            <ChildComponent data="Hello React JS" />

        </>

    )
}

export default PropDrilling;

const ChildComponent = (props) => {

    return (

        <>

            <h1>Component B</h1>

            <GrandChildComponent data={props.data} />

        </>

    )
}

const GrandChildComponent = (props) => {

    return (

        <>

            <h1>{props.data}</h1>

        </>

    )
}