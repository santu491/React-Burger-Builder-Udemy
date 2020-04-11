import React, { Component, useEffect } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as actionCreator from '../../store/actions/order'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

const Orders =(props)=>{

    const {fetchOrder}=props
    useEffect(()=>{
        fetchOrder()
    },[fetchOrder])

        let orders = <Spinner />
        if (!props.loading) {
            orders = <div>{
                props.orders.map((order) => {
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