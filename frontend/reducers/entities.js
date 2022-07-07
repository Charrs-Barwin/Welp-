import { combineReducers } from 'redux';
import usersReducer from './users';
import businessesReducer from './businesses'

export default combineReducers({
  users: usersReducer,
  businesses: businessesReducer
});
