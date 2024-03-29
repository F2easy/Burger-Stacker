// This component will loop over the ingreditents recieved as a prop from the parent componet(BurgerStacker)

// Each iteration of the loop will display one clickable component 

// this clickable item will be rendered by another, component called Ingredient

import Ingredient from './Ingredient'
const BurgerPane = (props) => {

    // console.log('the props in BurgerPane', this.props)
    // I can use destructuring syntax to isolate anything I'm bringing in from props
    const { ingredients } = props
    // console.log('the props in ing list', ingredients)
    let burgerBits = ingredients.map((ing, i) => (
        // this map will immediately return one item per loop iteration
        <li key={i}>
            <Ingredient 
                ingredient={ing}
                clickFunc={props.remove}
                itemKey={i}
            />
        </li>
    ))
    return (
        <section className='pane'>
            <h3>Burger Stack</h3>
            <ul>
                { burgerBits }
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
    
}