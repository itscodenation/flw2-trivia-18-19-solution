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
          questionText={"Question"}
          answerChoiceOne={"Answer 1"}
          answerChoiceTwo={"Answer 2"}
          answerChoiceThree={"Answer 3"}
          answerChoiceFour={"Answer 4"}
        />
      </div>
    );
  }
}

export default App;
