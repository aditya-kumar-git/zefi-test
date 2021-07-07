import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "Redux/Reducers";

let store = createStore(allReducers, applyMiddleware(thunk))

export default store;