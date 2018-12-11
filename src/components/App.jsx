import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowAnswer: false,
      currentQuestion : {
        question: "What is the answer to the Ultimate Question of Life, the Universe, and Everything",
        choices: [
            "Bubbles",
            "Chocolate",
            "42",
            "Puppies",
        ],
        correct_choice: "2"
      }
    };
  }

  _onAnswerButtonClicked(){
    console.log('answer clicked');
    this.setState({shouldShowAnswer: true})
  }

  render() {
    return (
      <div className="app">
        Kahoot!
        <Question 
          currentQuestion={this.state.currentQuestion}
          shouldShowAnswer={this.state.shouldShowAnswer}
          answerButtonClicked={() => this._onAnswerButtonClicked()}
        />
      </div>
    );
  }
}

export default App;
