import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Check Out</NavigationItem>
        </ul>
    )
}

export default NavigationItems