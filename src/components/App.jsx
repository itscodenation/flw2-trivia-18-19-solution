import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion : {
        question: "What is the answer to the Ultimate Question of Life, the Universe, and Everything",
        choices: [
            "Bubbles",
            "Chocolate",
            "42",
            "Puppies",
        ],
        correct_choice: "1"
      }
    };
  }

  render() {
    return (
      <div className="app">
        Kahoot!
        <Question 
          currentQuestion={this.state.currentQuestion}
        />
      </div>
    );
  }
}

export default App;
