import * as actionType from '../actions/actionTypes'
const initialState = {
    orders: [],
    loading: false
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        case actionType.PURCHASE_BURGER_FAILURE:
            return {
                ...state,
                loading: false
            }
        case actionType.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionType.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }

        case actionType.FETCH_ORDER_FAILURE:
            return {
                ...state,
                loading: false
            }
        case actionType.FETCH_ORDER_START:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }

}
export default order