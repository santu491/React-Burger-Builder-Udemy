import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'
import { connect } from 'react-redux'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

const Checkout=(props)=>{
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     // ingredients: {
    //     //     //     salad: 1,
    //     //     //     bacon: 1,
    //     //     //     cheese: 2,
    //     //     //     meat: 2
    //     //     // },
    //     //   //  ingredients:null,
    //     //    // totalPrice:0
    //     // }
    // }
   const checkoutCancel = () => {
        props.history.goBack()
    }
   const checkoutContinue = () => {

        // const queryParams = []

        // for (let i in this.props.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]))
        // }

        // let queryString = queryParams.join('&')
        // this.props.history.replace({
        //     pathname: '/checkout/contact-data',
        //     search: '?' + queryString,
        // })

        props.history.replace('/checkout/contact-data')
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



        // let summary = <Redirect to="/" />
        // if (this.props.ingredients) {
        //     summary =
        //         <div>
        //             <CheckoutSummary ingredients={this.props.ingredients}
        //                 checkoutCancel={this.checkoutCancel}
        //                 checkoutContinue={this.checkoutContinue}

        //             />
        //             {/* <Route path={this.props.match.path+"/contact-data"} component={ContactData}/> */}
        //             <Route path={this.props.match.path + "/contact-data"} render={(props) => (<ContactData ingredients={this.props.ingredients} totalPrice={this.props.totalPrice} {...props} />)} />
        //         </div>
        // }
        return (
        //    summary 
                 <div>
                <CheckoutSummary ingredients={props.ingredients}
                    checkoutCancel={checkoutCancel}
                    checkoutContinue={checkoutContinue}

                />
                {/* <Route path={this.props.match.path+"/contact-data"} component={ContactData}/> */}
                <Route path={props.match.path + "/contact-data"} render={(props) => (<ContactData ingredients={props.ingredients} totalPrice={props.totalPrice} {...props} />)} />
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
    }
}

// export default connect(mapStateToProps)(withErrorHandler(Checkout,axios))
export default connect(mapStateToProps)(Checkout)