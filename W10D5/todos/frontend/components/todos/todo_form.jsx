import React from "react";
import uniqueId from "../uniqueId"

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: uniqueId(),
            body: "",
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.prevenetDefault();

        this.props.receiveTodo(this.state)
        this.setState ({
          id: uniqueId(),
          body: "",
          title: "",
        });
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title
                <input type="text" value={this.state.title} />
              </label>
              <label>
                Body
                <input type="text" value={this.state.body} />
              </label>
              <button type="submit">Add New Todo</button>
            </form>
          </div>
        );
    }
}

export default TodoForm;

