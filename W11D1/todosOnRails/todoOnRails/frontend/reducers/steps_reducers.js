import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from "../actions/step_actions.js"


const initialState = {};

const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_STEPS:
            let newState = {};
            action.steps.forEach((ele) => {
                newState[ele.id] = ele;
            });
            return newState;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.stepId];
            return nextState;
        default:
            return oldState;
    }
}

export default stepsReducer;