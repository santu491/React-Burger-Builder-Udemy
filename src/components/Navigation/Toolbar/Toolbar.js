import React from 'react'
import BuregerLogo from '../../Logo/Logo'
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
const ToolBar=()=>{
    return(
        <header className="Toolbar">
            <div>Menu</div>
           <BuregerLogo/>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    ) 
}

export default ToolBar