import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types'
import firebase from 'firebase'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user =>loginUserSuccess(dispatch, user))
            .catch(()=>{
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                .then(user=>loginUserSuccess(dispatch, user))
                .catch(()=> loginUserFail(dispatch))
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}

const loginUserFail = (dispatch, user) => {
    dispatch({type: LOGIN_USER_FAIL})
}