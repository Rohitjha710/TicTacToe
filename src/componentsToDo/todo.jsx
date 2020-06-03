import React, { Component } from 'react';
class ToDo extends Component {
    state = {  }
    titleStyle =()=>{
        let a='';
        if(this.props.todo.completed === true)
        {
            a ='line-through';
        }
        else
        {
            a ='none';
        }
        return ({'text-decoration':a})
    }
   
    render() { 
        return ( <div style={{display:'flex'}}>
            <input checked={this.props.todo.completed}  type='checkbox' onClick={()=>this.props.handleCheckbox(this.props.todo.id)}/>
        <p style={this.titleStyle()}>{this.props.todo.title}</p>
        <button className='btn btn-warning btn-sm' onClick={()=>this.props.handleDelete(this.props.todo.id)}>X</button>
        </div>);
    }
}
 
export default ToDo;