import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./list";
class Board extends Component {
  state = {
    boardName: this.props.board.name
  };
  
  render() {
    return (
      <Router>
        <Link to="/list">
          <div  className="board">
            <h2>{this.state.boardName}</h2>
          </div>
        </Link>
        <Switch>
            <Route exact path="/list">
                <List list={this.props.board}/>
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default Board;
