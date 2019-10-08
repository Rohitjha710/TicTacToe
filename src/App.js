import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "./board";
import Lists from "./lists";
const apiKey = "f8fd58024b0cb495538a72009478e9b1";
const token =
  "cd01d05e0ddf70aec5e7130b16463fdf99378cb2925a98b91f50b5c623f32e9b";

class App extends Component {
  state = {
    boards: [],
    currentBoardId: ""
  };
  componentDidMount() {
    fetch(
      "https://api.trello.com/1/members/rohitjha13/boards?&key=" +
        apiKey +
        "&token=" +
        token +
        ""
    )
      .then(a => a.json())
      .then(responseObject => this.setState({ boards: responseObject }));
  }
  setCurrentBoardId = boardId => {
    this.setState({ currentBoardId: boardId });
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
          <main>
            <h1>Personal Boards</h1>
            <div className="boards">
              {this.state.boards.map(board => (
                <Board
                  key={board.id}
                  setCurrentBoardId={this.setCurrentBoardId}
                  board={board}
                />
              ))}
            </div>
          </main>
        </Route>
        <Route exact path="/b">
          <Lists boardId={this.state.currentBoardId} />
        </Route>
      </Router>
    );
  }
}

export default App;

// functionsetCurrentBoardId   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
