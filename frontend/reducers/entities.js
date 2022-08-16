import { combineReducers } from 'redux';
import usersReducer from './users';
import businessesReducer from './businesses'
import reviewsReducer from './reviews'

export default combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer
});
