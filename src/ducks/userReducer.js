import axios from "axios"

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export function requestUserData(){
    return{
        type: REQUEST_USER_DATA,
        payload: axios.get('/auth/user-data')
    }
}

export default function reducer(state= initialState, action){
    
    switch(action.type){
        case `${REQUEST_USER_DATA}_FULFILLED`:
            return {
                ...state,
                email: action.payload.data.user.email,
                firstName: action.payload.data.user.firstName,
                lastName: action.payload.data.user.lastName
            }

        default: return state
    }
}