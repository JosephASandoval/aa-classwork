import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = (props) => {
  return (
    <div>
      <h3>All the Todo's</h3>
      <ul>
        {props.todos.map((el) => {
          // return <li key={el.id}>{el.title}</li>;
          return <TodoListItem key={el.id} todo={el}/>
        })}
      </ul>
        <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );

}

export default TodoList;

