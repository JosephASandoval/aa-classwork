import { connect } from 'react-redux'
import { receiveTodo } from '../../actions/todo_actions.js'
import allTodos from '../../reducers/selectors.js'
import TodoList from "./todo_list.jsx" 

const mapStateToProps = (state) => ({
    todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
// connect is sending props to your components