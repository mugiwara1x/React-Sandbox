import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state={
      string:'Hello Mateo'
    };
  }
  render(){
  return(
    
    <div> 
    <header>
    <p>{this.state.string}</p>
    <button onClick={() => this.setState({string:'Hello pablo'})}>Change Text</button>
    
    </header>
  
    </div>
  )
  }
}
  

ReactDOM.render(<App />, document.getElementById('root'));