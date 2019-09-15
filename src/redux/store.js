import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

// dia akan mengakses Reducers>>index.js dengan otomatis
import reducers from './Reducers'
const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware))
// const yang sudah disebut di atas dimasukan ke store semua. fungsinya apa, nanti kita cari

export default store













