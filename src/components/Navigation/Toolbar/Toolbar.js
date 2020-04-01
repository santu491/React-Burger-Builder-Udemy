import React from 'react'
import Logo from '../../Logo/Logo'
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
const ToolBar=()=>{
    return(
        <header className="Toolbar">
            <div>Menu</div>

           <Logo height="80%"/>

            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    ) 
}

export default ToolBar