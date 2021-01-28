
const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type){
        //case: RECIEVE_TODOS
            //return 
        default:
            return oldState;
    }
}

export default todosReducer;
