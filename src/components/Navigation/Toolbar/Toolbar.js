import React from 'react'
import Logo from '../../Logo/Logo'
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import { checkPropTypes } from 'prop-types'
const ToolBar=(props)=>{
    return(
        <header className="Toolbar">
          <DrawerToggle drawertTogglehandler={props.drawertTogglehandler}/>

           <Logo height="80%"/>

            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    ) 
}

export default ToolBar