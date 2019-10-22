import {combineReducers} from 'redux'

import login from './Login'
import product from './Product'
import transaction from './Transaction'
import email from './Email'


const appReducer =  combineReducers({
    login,
    product,
    transaction,
    email
});

export default appReducer