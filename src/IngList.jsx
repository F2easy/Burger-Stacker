// This component will loop over the ingreditents recieved as a prop from the parent componet(BurgerStacker)

// Each iteration of the loop will display one clickable component 

// this clickable item will be rendered by another, component called Ingredient

// import React, {Component} from 'react'
import Ingredient from './Ingredients'

const IngList = (props) => {

    // If I want to pull something from props I can use destructuring syntax to isolate anything I'm brining in from props
    const { ingredients } = props
   // console.log('the props in ing list', this.props)
    let allIngs = ingredients.map((ing, i) => (
        // this mapp will immdediently return one item per loop iteration 
        <li key={i}>
            <Ingredient
              Ingredient = {ing}
              clickFunc={() => {console.log('clickFunc')}}
              itemKey = {i}
            />
        </li>
    ))

    return(
      <section className='pane'>
          <h3>Ingredient List</h3>
          <ul>
            { allIngs }
          </ul>
      </section>
    )
  }

  export default IngList
