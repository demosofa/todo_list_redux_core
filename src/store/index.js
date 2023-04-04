import { applyMiddleware, createStore } from "redux";
import todoMiddleware from "./middlewares/todoMiddleware";
import allReducers from "./reducers";

export default createStore(allReducers, applyMiddleware(todoMiddleware));
