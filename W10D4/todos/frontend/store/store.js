import { createStore } from "redux";
import rootReducer from "../reducers/root_reducers.js"

const configureStore = (preLoadedState = {}) => {
    console.log("store");
    return createStore(rootReducer, preLoadedState);
}

export default configureStore;
