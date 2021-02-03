import { RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const itemReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            nextState = action.pokemon.items;
            return nextState;
        default:
            return state;
    }
}

export default itemReducer;
