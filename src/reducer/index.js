import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import reducerResult from './resultReducer';

export default combineReducers({
  counter: counterReducer,
  results: reducerResult
})