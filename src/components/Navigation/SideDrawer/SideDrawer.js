import React from 'react'
import Logo from '../../Logo/Logo'
import NavigartionItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import BackDrop from '../../../components/UI/BackDrop/BackDrop'
import aux from '../../../hoc/Aux'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../../components/UI/BackDrop/BackDrop'

const SideDrawer=(props)=>{
    let attchedClasses="SideDrawer Close"
    if(props.open){
        attchedClasses="SideDrawer Open"
    }
    return( 
        <Aux>
            <Backdrop show={props.open} closeModal={props.closed}/>
        <div className={attchedClasses}>
            <Logo height="20%"/>
        <nav>
            <NavigartionItems />
        </nav>
        </div>
  
        </Aux>
    )
}

export default SideDrawer