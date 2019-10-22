import {combineReducers} from 'redux';
import transactionsReducer from './transactionsReducer'

export default combineReducers({
  TransactionsStore: transactionsReducer
})
