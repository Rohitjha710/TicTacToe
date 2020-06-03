import React, { Component } from "react";
import Add from "./Add";
import Appp from "./Appp";

import { Provider } from "react-redux";
import store from '../store';
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Add /> <Appp />
      </Provider>
    );
  }
}
export default App;
