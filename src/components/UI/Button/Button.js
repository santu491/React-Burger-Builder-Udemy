import React from 'react';
import classes from './Button.css'

const Button = (props) => {
    return (
        // <button className={["Button",props.btnType].join('')}>{props.children}</button>
        <button disabled={props.disbled} onClick={props.onClick} className={`Button ${props.btnType}`}>{props.children}</button>
    )
}

export default Button