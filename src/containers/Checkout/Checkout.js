import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ingredients: {
            //     salad: 1,
            //     bacon: 1,
            //     cheese: 2,
            //     meat: 2
            // },
            ingredients:null,
            totalPrice:0
        }
    }
    checkoutCancel = () => {
        this.props.history.goBack()
    }
    checkoutContinue = () => {

        const queryParams = []

        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }

        let queryString = queryParams.join('&')
        this.props.history.replace({
            pathname: '/checkout/contact-data',
            search: '?' + queryString,
        })
    }

    componentWillMount() {
        console.log("params:", this.props.location.search)

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = 0
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];

            } else {
                ingredients[param[0]] = +param[1];
            }

        }
        this.setState({ingredients:ingredients,totalPrice:price})
    }


    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}

                />
                {/* <Route path={this.props.match.path+"/contact-data"} component={ContactData}/> */}
                <Route path={this.props.match.path + "/contact-data"} render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)} />
            </div>
        )
    }
}

export default Checkout