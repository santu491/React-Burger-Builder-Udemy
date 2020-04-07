import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'
import {connect} from 'react-redux'
class Checkout extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // ingredients: {
        //     //     salad: 1,
        //     //     bacon: 1,
        //     //     cheese: 2,
        //     //     meat: 2
        //     // },
        //   //  ingredients:null,
        //    // totalPrice:0
        // }
    }
    checkoutCancel = () => {
        this.props.history.goBack()
    }
    checkoutContinue = () => {

        // const queryParams = []

        // for (let i in this.props.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]))
        // }

        // let queryString = queryParams.join('&')
        // this.props.history.replace({
        //     pathname: '/checkout/contact-data',
        //     search: '?' + queryString,
        // })

        this.props.history.replace('/checkout/contact-data')
    }

    // componentWillMount() {
    //     console.log("params:", this.props.location.search)

    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {}
    //     let price = 0
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1];

    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }

    //     }
    //     this.setState({ingredients:ingredients,totalPrice:price})
    // }


    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingredients}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}

                />
                {/* <Route path={this.props.match.path+"/contact-data"} component={ContactData}/> */}
                <Route path={this.props.match.path + "/contact-data"} render={(props) => (<ContactData ingredients={this.props.ingredients} totalPrice={this.props.totalPrice} {...props} />)} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        ingredients:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)