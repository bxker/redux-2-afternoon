import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
  })

  export default createStore(rootReducer, applyMiddleware(promise));
