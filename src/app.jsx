import React, { Component } from "react";
import Source from "./components/source";

const title = "TODO";

class App extends Component {

  render() {
    return (
      <div className="App">
				<h1>{title}</h1>
        <Source />
      </div>
    );
  }
}

export default App;