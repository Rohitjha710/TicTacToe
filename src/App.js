import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoardHeader from "./BoardHeader";
import Board from "./Board";
import Card from "./CardModal";
import "./App.css";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

class App extends Component {
  state = {
    boards: [],
    currentBoardId: "",
    currentCard: ""
  };
  componentDidMount() {
    console.log("component Did mount called");
    fetch(
      "https://api.trello.com/1/members/rohitjha13/boards?&key=" +
        apiKey +
        "&token=" +
        token +
        ""
    )
      .then(a => a.json())
      .then(responseObject => {
        console.log("data fetched and state changed");
        this.setState({ boards: responseObject });
      });
  }
  setCurrentBoardId = boardId => {
    this.setState({ currentBoardId: boardId });
  };
  currentCard = card => {
    console.log(card);
    this.setState({ currentCard: card });
  };

  render() {
    console.log("render\n");
    return (
      <Router>
        <Route exact path="/">
          <main>
            <h1>Personal Boards</h1>
            <div className="boards">
              {this.state.boards.map(board => (
                <BoardHeader
                  key={board.id}
                  setCurrentBoardId={this.setCurrentBoardId}
                  board={board}
                />
              ))}
            </div>
          </main>
        </Route>
        <Route exact path="/b/:id" render={props => <Board {...props} />} />
        <Route
          exact
          path="/b/:id/c/:cardId"
          render={props => (
            <React.Fragment>
              <Board {...props} /> <Card {...props} />
            </React.Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
