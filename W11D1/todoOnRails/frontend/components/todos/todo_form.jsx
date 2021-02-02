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
        this.handleTitle = this.handleTitle.bind(this)
        this.handleBody = this.handleBody.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();

      this.props.receiveTodo(this.state)
      this.setState ({
        id: uniqueId(),
        body: "",
        title: ""
      });
    }

    handleTitle(e) {
      this.setState({
        title: e.target.value
      })
    }


    handleBody(e) {
      this.setState({
        body: e.target.value
      });
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title
                <input type="text" onChange={this.handleTitle} value={this.state.title} />
              </label>
              <label>
                Body
                <input type="text" onChange={this.handleBody} value={this.state.body} />
              </label>
              <button type="submit">Add New Todo</button>
            </form>
          </div>
        );
    }
}

export default TodoForm;

