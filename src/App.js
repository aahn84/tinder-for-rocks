import React, { Component } from 'react';
import './App.css';
// import Rock from './components/Rock.js'
import RockList from './components/RockList.js'

let rock = {
  name: 'stoner',
  type: 'igneous',
  age: 420,
  color: 'green',
  hardness: 'rock solid',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Rock {...rock}/> */}
        <h1>Welcome to Tinder 4 Rocks!</h1>
        <RockList />
      </div>
    );
  }
}

export default App;

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/
