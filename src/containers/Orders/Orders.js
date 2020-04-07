import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as actionCreator from '../../store/actions/order'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    componentDidMount() {
        // this.setState({ loding: true })
        // axios.get('/orders.json').then((res) => {
        //     let fetchData = []
        //     for (let key in res.data) {
        //         fetchData.push({
        //             ...res.data[key],
        //             id: key,
        //         })
        //     }
        //     this.setState({ orders: fetchData, loding: false })
        // }).catch((error) => {
        //     this.setState({ loding: false })
        // })
        this.props.fetchOrder()
    }
    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = <div>{
                this.props.orders.map((order) => {
                    return (
                        <Order ingredients={order.ingredients} price={order.price} />
                    )

                })
            }

            </div>
        }
        return (
            <div>
                {orders}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrder: () => dispatch(actionCreator.fetchOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorhandler(Orders, axios))