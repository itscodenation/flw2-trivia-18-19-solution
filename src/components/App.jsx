import React, { Component } from 'react';
import '../css/App.css';
import {getRandomQuestion} from '../clients/firebase'
// import components
import Question from './Question'

class App extends Component {

  render() {
    let questionText = "My Question";
    let answerChoiceOne = "Answer 1";
    let answerChoiceTwo = "Answer 2";
    let answerChoiceThree = "Answer 3";
    let answerChoiceFour = "Answer 4";

    return (
      <div className="app">
        Kahoot!
        <Question 
          questionText={questionText}
          answerChoiceOne={answerChoiceOne}
          answerChoiceTwo={answerChoiceTwo}
          answerChoiceThree={answerChoiceThree}
          answerChoiceFour={answerChoiceFour}
        />
      </div>
    );
  }
}

export default App;
