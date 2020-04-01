import React from 'react'
import BuregerLogo from '../../assets/Images/burgerlogo.png'
// import BuregerLogo from '../../logo.svg'
import classes from './Logo.css'
import { checkPropTypes } from 'prop-types'

const Logo=(props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img alt="MyBurger" src={BuregerLogo}/>
        </div>
    )
}

export default Logo