import * as types from './actionTypes';
import {auth} from "../utils/firebase"

const registerStart=()=>({
    type:types.REGISTER_START,
})
const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user,
})
const registerError=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error,
});


const loginStart=()=>({
    type:types.LOGIN_START,
})
const loginSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
})
const loginError=(error)=>({
    type:types.LOGIN_FAIL,
    payload:error,
});


export const registerInitiate=(email,password)=>{
    return function(dispatch){
        dispatch(registerStart())
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(registerSuccess(user));
        }).catch((error)=>(dispatch(registerError(error.message))))
    }
}


export const loginInitiate=(email,password)=>{
    return function(dispatch){
        dispatch(loginStart())
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginSuccess(user));
        }).catch((error)=>(dispatch(loginError(error.message))))
    }
}