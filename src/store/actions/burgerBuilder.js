import * as actionType from './actionTypes'
import axios from '../../axios-orders'

export const addIngredients = (ingType) => {
    return {
        type: actionType.ADD_INGREDIENTS,
        ingType: ingType
    }
}

export const removeIngredients = (ingType) => {
    return {
        type: actionType.REMOVE_INGREDIENTS,
        ingType: ingType
    }
}

const  setIngredients=(ingredients)=>{
    console.log("ingredients",ingredients)
    return{
        type:actionType.SET_INGREDIENTS,
        payload:ingredients
    }
}

const fetchIngredientFailure=()=>{
    return{
        type:actionType.FETCH_INGREDIENT_FALIURE
    }
}

export const initBurgerIngredient=()=>{

    return dispatch=>{
        axios.get("https://react-burger-udemy-6766f.firebaseio.com/ingredients.json")
        .then((response) => {
            dispatch(setIngredients(response.data))
            //console.log(response)
        }).catch((error) => {
           dispatch(fetchIngredientFailure())

        })

    }
}