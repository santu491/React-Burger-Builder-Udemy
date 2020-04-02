import React from 'react'
import classes from './DrawerToggle.css'

const DrawerToggle=(props)=>{

    return(
        <div className="DrawerToggle" onClick={props.drawertTogglehandler} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle