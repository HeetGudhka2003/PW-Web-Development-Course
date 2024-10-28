import { Fragment } from 'react'

const SeriesCard = () => {

  // React Fragment

  return (

    <Fragment>

      <NetFlixSeries />

    </Fragment>

  )
}

// Every JSX expression must have a parent element, which means if you try to return multiple JSX elements, it will throw an error. Every JSX needs to be closed. You can use self closing tags that don't have any children. For example: <img src = "url" alt = "description" />

// A component is a function that returns a JSX expression. It allows for the creation of the complex and interactive user interfaces through assembly of isolated and resuable pieces of code. There are two main ways to create components in React: Functional and Class Components.


// Functional Components

const NetFlixSeries = () => {

  const name = 'Queen of Tears'

  const rating = 4.3

  const summary = 'Romantic Movie'

  const genre = () => { return "Drama" }

  let age = 17

  const canWatch = () => {

    if (age > 18) {

      return "Watch Now"
    }

    else {

      return "Not Available"
    }

  }

  return (

    <div>

      <img src="public/images/pathaan.jpg" alt="Pathaan Poster" width="40%" height="40%" />

      <h2>Name: {name}</h2>

      <h3>Rating: {rating}⭐</h3>

      <p>Summary: {summary}</p>

      <p>Genre: {genre()}</p>

      <button>{canWatch()}</button>

    </div>

  )
}

export default SeriesCard;

// React Fragment: A special type of component that can be used to group multiple elements without adding extra nodes to the DOM. It is useful when you want to return multiple JSX elements in a single parent component. It is nothing but using array with key.