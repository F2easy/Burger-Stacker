import React, { useState } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'
// class components are a little different than function components
// they use class style conventions (properties, and methods)
// we have to do things using class style syntaxes(as opposed to function syntax)
// we'll have a bunch of key:value pairs and methods
// state in a class component is held within an object.
// to use a class, we have to extend the component class that we bring in from react.

// first thing we do when coverting from class component to function components
// is identify what needs to be a state hook, and what doesnt
// Helpful to run a find for 'setState' and identify everythiing that setState interacts with.
// in this app, it's just the burgerIngredients, not the original ingredients array.
// Then we need to analyze the differences in syntax between classes and functions
// then our render method will go away, and be replaced by a return from the function component
// look for props with command find and if not there no need to add props as a param
const BurgerStacker = () => {
    // if you want to hold state in a class component, you use an object.
    // from there, we can update our state with a function called, setState
    // another feature of class components, is the keyword 'this'
    // we need to use this when referring to builtin functions, properties, and methods.
 
        // my main list of potential ingredients
        // both these pieces of state will be passed down to child components
  let  ingredients = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'}
    ]
    // going to be the ingredients on the burger that I'm stacking
    //    burgerIngredients: []

    // set up as a hook use useState to set up the hook, and give  a starting value
    // the parts of the useState hook, for reference, are this
    // const [nameOfPieceOfState, updaterFunction] = useState(initialValue)
    const [burgerIngredients, setBurgerIngredients] = useState([])
    

    
    // this area will hold our state manipulating functions.
    // we will pass these functions as props to the correct components to make this app work the way we want it to.
  const  addToStack = (e) => {
        // this method targets the properties of an ingredient
        // those properties change based on which one is clicked
        // we use those to build an object that resembles the original ingredient -> {name: 'something', color: 'some color' }
        // then, we will add that object to the burgerIngredients array
        // and bc we pass that array to BurgerPane, it will be looped over and render an Ingredient component for each item in the array
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        // console.log(`clicked ${ingName} and it is ${ingColor}`)
        // class components use a special method to update their state
        // This method is called 'setState'
        // setState is expecting an object, and within that object, we can refer to an individual piece of state to update
        // the line in there is saying, grab all the burgerIngredients, keep them in the array, and add the new ingredient to the front of the array
        
        //this is the old way of updating state with classes
        // this.setState({
        //     burgerIngredients: [{ name: ingName, color: ingColor }, ...burgerIngredients]
        // })
        // instead, with function components, we use the updater function initialized by useState
        setBurgerIngredients(
            [{ name: ingName, color: ingColor }, ...burgerIngredients]
            )
    }

    // this method removes a single ingredient from a burger
   const removeFromStack = (e) => {
        // console.log('the original burgerIngredients', this.state.burgerIngredients)
        // target a specific element in the burgerIngredients array
        // maybe we need the index?
        const clickIndex = e.target.id
       
        // once we have our specific item targeted, remove it from the array
        // make sure that the array in state is accurately updating
        // create a copy of the original array
        const currBurger = burgerIngredients.slice()

        // update the copy of the array correctly -> removing the targeted item
        currBurger.splice(clickIndex, 1)
     
        // then, overwrite that array in state with the newly update copy
        // this.setState({
        //     burgerIngredients: currBurger
        // })
        // we call our updater function, and use the same values as before
        setBurgerIngredients(currBurger)
    }

    // this clears the burgerIngredients array, effectively clearing the burger
  const  clearBurger = () => {
        // this is the old way
    //     this.setState({
    //         burgerIngredients: [],
    //     })
    // }
    setBurgerIngredients([])
  }
  // another feature of class components, is the keyword 'this'
  // we need to use this when reffering to builtin function properties,

    // There is one thing that all class components need to do 
    // They need to call the render method. Just like all function components need to return something
    // delete the closing curly, then delete the line with render()
    // render () {

    // after that, we look through our return, and identify anything that needs to change
    // that means, references to 'this' references to 'state
    return (
        <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                    remove={removeFromStack}
                />
            </div>
        </>
    )
    }
export default BurgerStacker