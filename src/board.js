import React, { Component } from "react";
import {  Link } from "react-router-dom";

class Board extends Component {
  state = {
    boardId:this.props.board.id,
    boardName: this.props.board.name
  };
  
  render() {
    return (
      
        <Link to={`/b/${this.state.boardId}`}>
        <div  className="board" onClick={this.props.setCurrentBoardId.bind(this,this.state.boardId)}>
            <h2>{this.state.boardName}</h2>
        
          </div>
        </Link>
        
      
          
            
    );
  }
}

export default Board;
