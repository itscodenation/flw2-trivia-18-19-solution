import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        Kahoot!
        <Question />
      </div>
    );
  }
}

export default App;
