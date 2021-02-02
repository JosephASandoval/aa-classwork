import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducers.js"
import myThunk from "../middleware/myThunk"

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState, applyMiddleware(myThunk));
}

export default configureStore;
