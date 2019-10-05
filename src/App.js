import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import Board from "./board"
    class App extends Component {
      state = {
         boards:this.props.boards
       
      };
      
    render() {
      console.log(this.state.boards);
      return (
        <section>
          <h1>
            Personal Boards
          </h1>
          <div className="boards">
          {this.state.boards.map(board=>(<Board board={board}/>))}
          </div>
        </section>
      );
    }
  }
  
  
  
  export default App;
  
  
// function Home() {
//   return <h2>Home</h2>;
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
