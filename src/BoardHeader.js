import React, { Component } from "react";
import {  Link } from "react-router-dom";

class BoardHeader extends Component {
  state = {
    boardId:this.props.id,
    boardName: this.props.name
  };
  
  render() {
    console.log(this.props);
    return (
      
        <Link to={`/b/${this.state.boardId}`}>
        <div  className="board" onClick={this.props.setCurrentBoardId.bind(this,this.state.boardId)}>
            <h2>{this.state.boardName}</h2>
        
          </div>
        </Link>
        
    );
    
  }
}

export default BoardHeader;
