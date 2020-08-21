import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import meditationsReducer from './meditations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  meditations: meditationsReducer,
});

export default entitiesReducer;