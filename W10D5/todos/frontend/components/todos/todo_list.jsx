import React from "react"
import TodoListItem from "./todo_list_item"

const TodoList = (props) => {
  return (
    <div>
      <h3>All the Todo's</h3>
      <ul>
        {props.todos.map((el) => {
          // return <li key={el.id}>{el.title}</li>;
          return <TodoListItem todo={el}/>
        })}
      </ul>
    </div>
  );

}

export default TodoList;

