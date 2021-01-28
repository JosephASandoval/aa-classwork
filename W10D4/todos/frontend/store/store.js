import { createStore } from `redux`;
import rootReducer from "../reducers/root_reducers.js"

function configureStore(){
    createStore(rootReducer);
}

export default configureStore;