import * as actionType from './actions'

const initialState = {
    ingredients: {
        // salad: 1,
        // bacon: 1,
        // cheese: 2,
        // meat: 2
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 0.4,
    cheese: 0.6,
    bacon: 0.7
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1,
                },
        
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingType]
            }

        case actionType.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingType]
            }
        default:
            return state
    }
}

export default reducer