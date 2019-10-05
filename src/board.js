import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Board extends Component {
  state = {
    boardName: this.props.board.name
  };
  
  render() {
    return (
          <div  className="board">
            <h2>{this.state.boardName}</h2>
          </div>
            
    );
  }
}

export default Board;
