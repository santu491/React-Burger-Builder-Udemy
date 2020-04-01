import React from 'react'
import BuregerLogo from '../../assets/Images/burgerlogo.png'
// import BuregerLogo from '../../logo.svg'
import classes from './Logo.css'

const Logo=()=>{
    return(
        <div className="Logo">
            <img alt="MyBurger" src={BuregerLogo}/>
        </div>
    )
}

export default Logo