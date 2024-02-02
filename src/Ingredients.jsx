// this component will display an individual ingredient 
// we'll use name and color from the ingredient
// each ingredient object will come from props
// and this component will be clickable
// if the component is rendered by IngList
// then the click will add the ingredient to the burger
// if the component is rendered by BurgerPane
// then the click remove it from the buger
 //   import React, {Component} from 'react'

 const Ingredient = (props) => {


  //  console.log('this is props in Ingredient', this.props)
  // destrucnture our ingredients k:v pairs for easy reference
  const { name, color } = props.ingredient

    return (
      <p
        style={{ backgroundColor: color}} 
        onClick={props.clickFunc}
        id={props.itemKey}
      >
        {name}
      </p>
    )
  
}

export default Ingredient