import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDecrement = e => {
    const counters = this.state.counters.filter(c => c.id !== e);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar  counters={this.state.counters}/>
        <main className="container">
          <Counters counters={this.state.counters}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
