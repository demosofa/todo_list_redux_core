import { combineReducers } from "redux";

import todo from "./todoReducer";

const allReducers = combineReducers({
  todo,
});

export default allReducers;
