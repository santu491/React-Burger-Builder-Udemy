import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loding: false
    }

    componentDidMount() {
        this.setState({ loding: true })
        axios.get('/orders.json').then((res) => {
            let fetchData = []
            for (let key in res.data) {
                fetchData.push({
                    ...res.data[key],
                    id: key,
                })
            }
            this.setState({ orders: fetchData, loding: false })
        }).catch((error) => {
            this.setState({ loding: false })
        })
    }
    render() {
        return (
            <div>{
                this.state.orders.map((order) => {
                    return (
                        <Order ingredients={order.ingredients} price={order.price} />
                    )

                })
            }

            </div>

        )
    }
}

export default withErrorhandler(Orders, axios)