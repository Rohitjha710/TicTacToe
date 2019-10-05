import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 class List extends Component {
     state = {  }
     render() { 
         return (
             <h1>{this.props.list.name}</h1>
         );
     }
 }
  
 export default List;