export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as TODO_API_Util from "./api/util"

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos, // same as todos: todos
  };
};

export const receiveTodo = (todo) => {
  debugger
  return {
    type: RECEIVE_TODO,
    todo,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}

export const fetchTodos = () => (dispatch) => {
  TODO_API_Util.fetchTodos().then(todo => dispatch(receiveTodo(todo)))
}

