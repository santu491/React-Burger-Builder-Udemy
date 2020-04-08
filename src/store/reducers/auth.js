import * as actionType from '../actions/actionTypes'
const initialState = {
    loading: false,
    error:null
}

const auth = (state=initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                //loading: false
            }

        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case actionType.AUTH_START:
            return {
                ...state,
                loading: true
            }
            default:
                return state
    }

}

export default auth