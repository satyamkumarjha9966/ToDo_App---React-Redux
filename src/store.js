import { combineReducers, createStore } from "redux";

// Import Reducer
import todoReducer from "./Reducers/todoReducer";

// Making Combine Reducer Functionality
const reducers = combineReducers({ todo: todoReducer });

const store = createStore(reducers);

export default store;
