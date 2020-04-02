import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsummary = Object.keys(props.ingredients).map((igKey) => {

    return (<li><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>)
    })

    return (
        <Aux>
            <h3>Your order </h3>
            <p>a delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsummary}
            </ul>
            <p>Continue to checkout?</p>
    <p><strong>total Price:{props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" onClick={props.closeModal}>Cancel</Button>
            <Button btnType="Success" onClick={props.purchaseContinued}>Continue</Button>

        </Aux>
    )
}

export default orderSummary