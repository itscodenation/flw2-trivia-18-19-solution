import React, { Component } from 'react';
import '../css/App.css';
import {getRandomQuestion} from '../clients/firebase'
// import components
import Question from './Question'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     questionText: null,
  //     answerChoiceOne: null,
  //     answerChoiceTwo: null,
  //     answerChoiceThree: null,
  //     answerChoiceFour: null,
  //   };
  // }
  
  // async componentWillMount(){
  //   const randomQuestion = await getRandomQuestion();
  //   this.setState({
  //     questionText: randomQuestion.question_text,
  //     answerChoiceOne: randomQuestion.choices[0],
  //     answerChoiceTwo: randomQuestion.choices[1],
  //     answerChoiceThree: randomQuestion.choices[2],
  //     answerChoiceFour: randomQuestion.choices[3],
  //   });
  // }

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
