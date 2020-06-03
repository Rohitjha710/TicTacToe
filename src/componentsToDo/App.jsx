import React, { Component } from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import './App.css'
class App extends Component {
    state = { 
        addToDo :'',
        todos :[
            {id:Math.floor(Math.random()*10000),title:'todo1',completed:false},
            {id:Math.floor(Math.random()*10000),title:'todo2',completed:false},
            {id:Math.floor(Math.random()*10000),title:'todo3',completed:true}
        ]
     }
     handleCheckbox =(id)=>{
      
         let index;
         let element = this.state.todos;
      let {todos} =   this.state;
      for(let i = 0 ; i<todos.length;i++)
      {
        if(id === todos[i].id){
            index=i;
            break;
        }
    
      }
      element[index].completed = !element[index].completed;
      this.setState({todos :element})
     }
     handleChange =(e)=>{    
         this.setState({addToDo:e.target.value})
     }
     add =()=>{
         let value = this.state.addToDo;
         let obj={id:Math.floor(Math.random()*10000),title:value,completed:false}
         let newToDo = this.state.todos;
         newToDo.push(obj);
this.setState({todos:newToDo,addToDo:''})
     }
     handleDelete =(id)=>{
let newTodo=this.state.todos.filter(todo=>{
if(todo.id!==id){
return todo;
}

})
this.setState({todos:newTodo})
     }
    render() { 
        return (
            <div className='container'>
                <Header/>
                <AddToDo addToDo={this.state.addToDo} handleChange={this.handleChange} add={this.add}/>
                <ToDoList handleCheckbox={this.handleCheckbox} handleDelete={this.handleDelete} todos={this.state.todos}/>
            </div >
         );
    }
}
 
export default App;