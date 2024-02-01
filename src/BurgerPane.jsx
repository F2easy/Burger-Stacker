// This component will loop over the ingreditents recieved as a prop from the parent componet(BurgerStacker)

// Each iteration of the loop will display one clickable component 

// this clickable item will be rendered by another, component called Ingredient
import Ingredient from './Ingredients'
import React, {Component} from 'react'

export default class BurgerPane extends Component {
  render(){
    console.log('the props BurgerPane', this.props)

      let BurgerBits = Ingredient.map((ing, i) => (
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
          <h3>Burger Stack</h3>
          <ul>
              {  }
          </ul>
      </section>
    )
  }
}