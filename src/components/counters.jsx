import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
    return (
      <div>
          <button onClick={this.props.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map(counter => (
          <Counter
          handleIncrement={this.props.handleIncrement}
            onDelete={this.props.handleDecrement}
            key={counter.id}
            counter={counter}
          >
            {/* <h1>hello</h1><p>world</p> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
