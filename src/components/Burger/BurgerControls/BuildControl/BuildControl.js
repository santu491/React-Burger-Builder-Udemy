import React from 'react'
import classes from './BuildControl.css'

const BuildControl=(props)=>(
    <div className="BuildControl">
        <p className="Label"> {props.label}</p>
        <button className="Less" onClick={props.removeingredients} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.addIngredients }>More</button>
    </div>

)

export default BuildControl