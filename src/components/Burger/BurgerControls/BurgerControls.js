import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls=[
    {type:'salad',label:'Salad'},
    {type:'bacon',label:'Bacon'},
    {type:'meat',label:'Meat'},
    {type:'cheese',label:'cheese'}
]
const BuildControls=(props)=>(
    <div className="BuildControls">
        <p>Current Price:<b>{props.price.toFixed(2)}</b></p>
        {
            controls.map((item)=>
           ( <BuildControl key={item.type} label={item.label}
            addIngredients={()=>props.addIngredients(item.type)}
            removeingredients={()=>props.removeingredients(item.type)}
            disabled={props.disabled[item.type]}
           />)
            
            )
        }
        <button
        
        onClick={props.purchasehandler}
        className="OrderButton" disabled={!props.isPurchable}>Order Now</button>
    </div>

)

export default BuildControls