import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import meditationsReducer from './meditations_reducer';
import listsReducer from './lists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  meditations: meditationsReducer,
  lists: listsReducer,
});

export default entitiesReducer;