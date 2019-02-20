// Vendor imports
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Picker from "./Picker";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Chart Tile Picker</h1>
        </header>
        <Router>
          <Picker path="/" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
