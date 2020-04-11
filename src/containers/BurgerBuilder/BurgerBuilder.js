import React, { Component, useState, useEffect } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import OredrSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import WithErrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import {connect} from 'react-redux'
import * as actionType from '../../store/actions/actionTypes'
import * as actionCreator from '../../store/actions/index'


const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 0.4,
    cheese: 0.6,
    bacon: 0.7
}

const BurgerBuilder =(props)=>  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //  ingredients: {
    //         //     salad: 1,
    //         //     bacon: 1,
    //         //     cheese: 2,
    //         //     meat: 2
    //         // },
    //        //ingredients: null,
    //         // totalPrice: 4,
    //         // isPurchable: false,
    //         isPurchase: false,
    //         loading: false,
    //        // error:false
    //     }

    // }

    const [isPurchase,setPurchase]=useState(false)
    const [loading,setLoading]=useState(false)

    // updatePurchaseState = (ingredients) => {
    //     // const ingredients = { ...this.state.ingredients }
    //     const sum = Object.keys(ingredients).map((igKey) => {
    //         return ingredients[igKey]
    //     }).reduce((s, el) => {
    //         return s + el
    //     }, 0)
    //     this.setState({ isPurchable: sum > 0 })
    // }

    // addIngredienthandlers = (type) => {
    //     let oldCount = this.state.ingredients[type]
    //     if (oldCount === 0) {
    //         return
    //     }
    //     let updatedCount = oldCount + 1
    //     let updatedInegrented = {
    //         ...this.state.ingredients
    //     }
    //     updatedInegrented[type] = updatedCount

    //     const priceAddition = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newprice = oldPrice + priceAddition
    //     this.setState({
    //         ingredients: updatedInegrented,
    //         totalPrice: newprice
    //     })
    //     this.updatePurchaseState(updatedInegrented)
    //     // alert("less",JSON.stringify(type) )
    //     // console.log("type",type)
    // }
    // removeIngredienthandlers = (type) => {

    //     let oldCount = this.state.ingredients[type]
    //     if (oldCount === 0) {
    //         return
    //     }
    //     let updatedCount = oldCount - 1
    //     let updatedInegrented = {
    //         ...this.state.ingredients
    //     }
    //     updatedInegrented[type] = updatedCount

    //     const priceAddition = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newprice = oldPrice - priceAddition
    //     this.setState({
    //         ingredients: updatedInegrented,
    //         totalPrice: newprice
    //     })
    //     this.updatePurchaseState(updatedInegrented)
    // }
   const purchasehandler = () => {
       // this.setState({ isPurchase: true })
        setPurchase(true)
    }

   const closeModal = () => {
       // this.setState({ isPurchase: false })
        setPurchase(false)
    }

   const updatePurchaseState = (ingredients) => {
        // const ingredients = { ...this.state.ingredients }
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((s, el) => {
            return s + el
        }, 0)
     return sum > 0 
    }
  const  purchaseContinued = () => {
        // this.setState({ loading: true })
        // let data = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "santosh",
        //         address: {
        //             state: "A.p",
        //             country: "India"
        //         },
        //         deliveryMethod: "fast"
        //     }

        // }

        // axios.post('/orders.json', data).then((response) => {
        //     console.log("response", response)
        //     this.setState({ loading: false, isPurchase: false })
        // }).catch((e) => {
        //     console.log("error", e)
        //     this.setState({ loading: false, isPurchase: false })
        // })
        // // alert("continued")
        //--------

        // let queryParams=[]
        // for(let i in this.props.ingredients){
        //     queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.props.ingredients[i]))
        // }
        // queryParams.push('price='+this.props.totalPrice)
        // const querystring=queryParams.join('&')
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+querystring,
        // })
        //---------
        props.history.push('/checkout')
    }

    // componentDidMount() {
    //     // let current=this
    //     // axios.get("https://react-burger-udemy-6766f.firebaseio.com/ingredients.json")
    //     //     .then((response) => {
    //     //         this.setState({ ingredients: response.data })
    //     //         //console.log(response)
    //     //     }).catch((error) => {
    //     //         this.setState({error:true})

    //     //     })
    //         this.props.initBurgerIngredient()
    // }

    const {initBurgerIngredient}=props
    useEffect(()=>{
        initBurgerIngredient()
    },[initBurgerIngredient])

        // const disabledInfo = { ...this.props.ingredients }
        // for (let key in disabledInfo) {
        //     disabledInfo[key] = disabledInfo[key] <= 0
        // }
        let orderSummary = null
        let burger = props.error?<p>ingredients can't be loaded...!</p>:<Spinner />
        if (props.ingredients) {
            const disabledInfo = { ...props.ingredients }
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0
            }
            burger = (
                <Aux>
                    <Burger ingredients={props.ingredients} />
                    <Buildcontrols
                        // addIngredients={this.addIngredienthandlers}
                        // removeingredients={this.removeIngredienthandlers}
                        addIngredients={(type)=>props.addIngredients(type)}
                        removeingredients={(type)=>props.removeIngredients(type)}
                        disabled={disabledInfo}
                        price={props.totalPrice}
                        // isPurchable={this.state.isPurchable}
                        isPurchable={updatePurchaseState(props.ingredients)}
                        purchasehandler={purchasehandler}
                    />
                </Aux>
            );

            orderSummary = (<OredrSummary ingredients={props.ingredients}
                purchaseContinued={purchaseContinued}
                closeModal={closeModal}
                totalPrice={props.totalPrice}
            />)
        }

        if (loading) {
            orderSummary = <Spinner />
        }


        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
                <Modal show={isPurchase} closeModal={closeModal}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    
}

const mapStateToProps=(state)=>{
    return{
        ingredients:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addIngredients:(ingType)=>dispatch(actionCreator.addIngredients(ingType)),
        removeIngredients:(ingType)=>dispatch(actionCreator.removeIngredients(ingType)),
        initBurgerIngredient:()=>dispatch(actionCreator.initBurgerIngredient())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorhandler(BurgerBuilder, axios));