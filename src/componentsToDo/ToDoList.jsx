import React, { Component } from 'react';
import ToDo from './todo';
class ToDoList extends Component {
    render() { 
        return ( 
            this.props.todos.map(todo=>(
                <ToDo key={todo.id} handleCheckbox={this.props.handleCheckbox} handleDelete={this.props.handleDelete} todo={todo}/>
            ))
         );
    }
}
 
export default ToDoList;