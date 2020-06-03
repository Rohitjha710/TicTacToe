import React, { Component } from 'react';
class AddToDo extends Component {
    render() { 
        return (
        <div className='addToDo'>
            <input className='addTodo-input' value={this.props.addToDo} onKeyPress={this.props.handleChange}/>
            <button className='btn btn-primary btn-sm m3 addTodo-button' onClick={this.props.add}>Add</button>
        </div>  );
    }
}
 
export default AddToDo;