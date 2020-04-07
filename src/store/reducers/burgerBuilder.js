import * as actionType from '../actions/actionTypes'

const initialState = {
    // ingredients: {
    //     // salad: 1,
    //     // bacon: 1,
    //     // cheese: 2,
    //     // meat: 2
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
    ingredients:null,
    totalPrice: 4,
    error:false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 0.4,
    cheese: 0.6,
    bacon: 0.7
}


export const burgerBuilderReducer = (state = initialState, action) => {
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
            case actionType.SET_INGREDIENTS:
                return{
                    ...state,
                    ingredients:{
                        salad: action.payload.salad,
                        bacon: action.payload.bacon,
                        cheese: action.payload.cheese,
                        meat: action.payload.meat
                    },
                    totalPrice:4
                }
                case actionType.FETCH_INGREDIENT_FALIURE:
                    return{
                        ...state,
                        error:true
                    }
        default:
            return state
    }
}

export default burgerBuilderReducer