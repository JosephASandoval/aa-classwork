import { combineReducers } from "redux";
import todosReducer from "./todos_reducers.js"

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;
