import React from 'react'
import classes from './BackDrop.css'

const Backdrop = (props) => {
    return (
         props.show ? <div className="BackDrop" onClick={props.closeModal}>fhhjgjhgjhgh</div> : null 
    )
}

export default Backdrop    
