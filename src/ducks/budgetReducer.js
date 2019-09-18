import { applyMiddleware } from "redux";
import Axios from "axios";

//initial state
const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

//const strings
const REQUEST_BUDGET_DATA ='REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE';
const DELETE_PURCHASE = 'DELETE_PURCHASE';

//action creator
export function requestBudgetData(){
    return {
        type: REQUEST_BUDGET_DATA,
        payload: Axios.get('/api/budget-data')
    }
}

export function addPurchase(price, description, category){
    return{
        type: ADD_PURCHASE,
        payload: Axios.post('/api/budget-data/purchase', {
            description,
            price,
            category
        })
    }
}

export function deletePurchase(id){
    return{
        type: DELETE_PURCHASE,
        payload: Axios.delete(`/api/budget-data/purchase/${id}`)
    }
}

//reducer
export default function reducer(state = initialState, action){
    console.log(action.payload)
    switch(action.type){
        case `${REQUEST_BUDGET_DATA}_FULFILLED`:
            return{
                ...state,
                purchases: action.payload.data.purchases,
                budgetLimit: action.payload.data.budgetLimit,
                loading: false
            }
        case `${REQUEST_BUDGET_DATA}_PENDING`:
            return{
                ...state,
                loading: true
            }
        case `${ADD_PURCHASE}_FULFILLED`:
            return{
                ...state,
                purchases: action.payload.data,
                loading: false
            }
        case `${ADD_PURCHASE}_PENDING`:
            return{
                ...state,
                loading: true
            }
        case `${DELETE_PURCHASE}_FULFILLED`:
            return{
                ...state,
                purchases: action.payload.data,
                loading: false
            }
        case `${DELETE_PURCHASE}_PENDING`:
            return{
                ...state,
                loading: true
            }
        default: return state
    }
}
