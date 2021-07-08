import React, {Component} from 'react';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    addTask = () => {
        const todo = {
            id: Date.now(),
            todo: this.state.todo,
            isComplete: false
        }

        this.setState({
            todos: this.state.todos.concat(todo),
            todo: ""
        })
    }
    deleteTask =(id)=> {

        this.setState({
           todos: this.state.todos.filter((todo)=>{
               return todo.id != id
           })
        })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div className="container">
                <div className="row" style={{
                    marginLeft: "30%"
                }}>
                    <div className="col-md-8 offset-2">
                        <div className="input-group">
                            <input type="text" value={this.state.todo} onChange={this.handleInputChange} className="form-control"/>
                            <div className="input-group-append"
                                 style={{
                                     float: "left"
                                 }}>
                                <button onClick={this.addTask} className="btn">Add</button>
                            </div>
                        </div>
                        {this.state.todos.map((value, index)=>{
                            return <div>
                                <h2>{value.todo}</h2>
                                <input value={this.todo} type="checkbox"/>
                                <button onClick={()=>this.deleteTask(value.id) }>delete</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


Todo.propTypes = {};

export default Todo;