import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OredrSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 0.4,
    cheese: 0.6,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            },
            totalPrice: 4,
            isPurchable: false,
            isPurchase:false
        }

    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = { ...this.state.ingredients }
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((s, el) => {
            return s + el
        }, 0)
        this.setState({ isPurchable: sum > 0 })
    }

    addIngredienthandlers = (type) => {
        let oldCount = this.state.ingredients[type]
        if (oldCount === 0) {
            return
        }
        let updatedCount = oldCount + 1
        let updatedInegrented = {
            ...this.state.ingredients
        }
        updatedInegrented[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice + priceAddition
        this.setState({
            ingredients: updatedInegrented,
            totalPrice: newprice
        })
        this.updatePurchaseState(updatedInegrented)
        // alert("less",JSON.stringify(type) )
        // console.log("type",type)
    }
    removeIngredienthandlers = (type) => {

        let oldCount = this.state.ingredients[type]
        if (oldCount === 0) {
            return
        }
        let updatedCount = oldCount - 1
        let updatedInegrented = {
            ...this.state.ingredients
        }
        updatedInegrented[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newprice = oldPrice - priceAddition
        this.setState({
            ingredients: updatedInegrented,
            totalPrice: newprice
        })
        this.updatePurchaseState(updatedInegrented)
    }
purchasehandler=()=>{
    this.setState({isPurchase:true})
}

closeModal=()=>{
    this.setState({isPurchase:false})
}

purchaseContinued=()=>{
    alert("continued")
}
    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
                <Modal show={this.state.isPurchase} closeModal={this.closeModal}>
                    <OredrSummary ingredients={this.state.ingredients} 
                    purchaseContinued={this.purchaseContinued}
                    closeModal={this.closeModal}
                    totalPrice={this.state.totalPrice}
                    />
                    </Modal>
                <Burger ingredients={this.state.ingredients} />
                <Buildcontrols
                    addIngredients={this.addIngredienthandlers}
                    removeingredients={this.removeIngredienthandlers}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    isPurchable={this.state.isPurchable}
                    purchasehandler={this.purchasehandler}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;