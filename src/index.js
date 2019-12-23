import ReactDOM from "react-dom";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankestein",
          id: "asd"
        },
        {
          name: "Dracula",
          id: "ase"
        },
        {
          name: "Zombie",
          id: "asf"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
