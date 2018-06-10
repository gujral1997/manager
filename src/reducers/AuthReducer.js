import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types'

const INITIAL_STATE = {email: '', password: '', user: null}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED: 
            //  state.email = action.payload
            //  return state
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return{...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload}
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.'}
        default:
        return state
    }
}