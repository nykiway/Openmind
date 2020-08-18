import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  users: UsersReducer
})

export default rootReducer;