export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => {
  console.log('recieveTodos')
  return {
    type: RECEIVE_TODOS,
    todos, // same as todos: todos
  };
};

export const receiveTodo = (todo) => {
  console.log('recieveTodo')
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

