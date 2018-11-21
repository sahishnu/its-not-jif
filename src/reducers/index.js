import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import gifReducer from './gifReducer';
export default combineReducers({
  searchReducer,
  gifReducer
});