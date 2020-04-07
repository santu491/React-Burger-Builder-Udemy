import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }

}

const purchaseBurgerSuccess = (id,orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData: orderData
    }
}

const purchaseBurgerFailure = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error:error
    }
}

export const purchaseBurger = (orderData,history) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData).then((response) => {
            console.log("response", response)
        dispatch(purchaseBurgerSuccess(response.data,orderData)) 
         history.push('/')
        }).catch((e) => {
            dispatch(purchaseBurgerFailure())
        })
    }
}

export const fetchOrderSuccess=(fetchData)=>{
    return{
        type:actionTypes.FETCH_ORDER_SUCCESS,
        payload:fetchData
    }
}

export const fetchOrederFail=(error)=>{
    return{
        type:actionTypes.FETCH_ORDER_FAILURE,
        error:error
    }
}

export const fetchOredrStart=()=>{
    return{
        type:actionTypes.FETCH_ORDER_START
    }
}
export const fetchOrder=()=>{
    return dispatch=>{
        dispatch(fetchOredrStart())
        axios.get('/orders.json').then((res) => {
            let fetchData = []
            for (let key in res.data) {
                fetchData.push({
                    ...res.data[key],
                    id: key,
                })
            }
            dispatch(fetchOrderSuccess(fetchData))
        }).catch((error) => {
          dispatch(fetchOrederFail(error))  
        })
    }
}