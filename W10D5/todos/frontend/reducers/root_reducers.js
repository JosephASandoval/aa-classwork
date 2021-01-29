import { combineReducers } from "redux";
import todosReducer from "./todos_reducers.js"
import stepsReducer from "./steps_reducers.js"

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer
});

export default rootReducer;
