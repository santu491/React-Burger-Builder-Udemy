import * as actionType from './actionTypes'
import axios from 'axios'

export const authentication = (email, password) => {
    return (dispatch) => {
        dispatch(authStart())
        let data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAIJODBOYLnpSmr0vdJpkzjRUW3Y5A3jsI', data).then((res) => {
            dispatch(authSuccess())
        }).catch((error) => {
            console.log("error", error)
            dispatch(authFail(error))
        })

    }
}

const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}


const authSuccess = (data) => {
    return {
        type: actionType.AUTH_SUCCESS,
        payload: data
    }
}

const authFail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        error: error.message
    }
}