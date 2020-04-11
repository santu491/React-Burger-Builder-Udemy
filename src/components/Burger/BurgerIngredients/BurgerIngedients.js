import React, { Component } from 'react'
import classes from './BurgerIngerdients.css'
import ProtoTypes from 'prop-types'

const BurgerIngredients =(props)=>{


        let ingredient = null
        switch (props.type) {
            case 'bread-bottom':
                return ingredient = <div className="BreadBottom"></div>
            case 'bread-top':
                return ingredient = (<div className="BreadTop">

                    <div className={"Seeds1"}></div>
                    <div className={"seeds2"}></div>
                </div>)

            case 'meat':
                return ingredient = <div className="meat"></div>
            case 'bacon':
                return ingredient = <div className="bacon"></div>
            case 'salad':
                return ingredient = <div className="salad"></div>
            case 'cheese':
                return ingredient = <div className="cheese"></div>
        }
        // return (
        //     <div>{ingredient}</div>
        // )
        return ingredient;
}

BurgerIngredients.propTypes={
    type:ProtoTypes.string.isRequired

}

export default BurgerIngredients