import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions.js"

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (oldState = initialState, action) => {
    console.log("todo_reducer")
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_TODOS:
            let newState = {};
            action.todos.forEach((ele) => {
                newState[ele.id] = ele;
            });
            return newState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            delete nextState[action.todoId];
            return nextState
        default:
            return oldState;
    }
}

export default todosReducer;
