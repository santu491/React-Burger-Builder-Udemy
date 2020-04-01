import React, { Component } from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngedients'
import classes from './Burger.css'

const Burger = (props) => {
const transformedIngredient=Object.keys(props.ingredients).map(igKey=>{
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
        return <BurgerIngredients key={igKey+i} type={igKey}/>
    }).reduce((arr,el)=>{return arr.concat(el)},[])
})
if(transformedIngredient.length===0){
    transformedIngredient=<p>Please add ingidents</p>
}

    return (
        <div className="Burger">

            <BurgerIngredients type="bread-top"/>
           
            {/* <BurgerIngredients type="bacon"/>
            <BurgerIngredients type="salad"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="meat"/> */}
            {transformedIngredient}
            <BurgerIngredients type="bread-bottom"/>

        </div>
    )
}

export default Burger