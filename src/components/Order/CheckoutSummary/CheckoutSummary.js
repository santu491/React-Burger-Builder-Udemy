import React from 'react';
import Burger from '../../Burger/Burger'
import classes from './CheckoutSummary.css'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width:"100%",margin:"auto"}}>
            <Burger ingredients={props.ingredients} />
            </div>
            <div>
            <Button btnType="Danger" onClick={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success" onClick={props.checkoutContinue}>CONTINUE</Button>
           </div>

        </div>
    )

}

export default checkoutSummary