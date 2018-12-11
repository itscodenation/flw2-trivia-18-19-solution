import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question'

class App extends Component {


  render() {
    return (
      <div className="app">
        Kahoot!
        <Question 
          questionText={"What is the answer to the Ultimate Question of Life?"}
          answerChoiceOne={"Bubbles"}
          answerChoiceTwo={"Puppies"}
          answerChoiceThree={"42"}
          answerChoiceFour={"Cookies"}
        />
      </div>
    );
  }
}

export default App;
