import React, { Component } from 'react';
import '../css/App.css';
import {getRandomQuestion} from '../clients/firebase'
// import components
import Question from './Question'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      questionText: null,
      answerChoiceOne: null,
      answerChoiceTwo: null,
      answerChoiceThree: null,
      answerChoiceFour: null,
    }
  }

  async componentWillMount(){
    var randomQuestion = await getRandomQuestion();
    this.setState({
      questionText: randomQuestion.question_text,
      answerChoiceOne: randomQuestion.choices[0],
      answerChoiceTwo: randomQuestion.choices[1],
      answerChoiceThree: randomQuestion.choices[2],
      answerChoiceFour: randomQuestion.choices[3],
    })
  }

  render() {
    return (
      <div className="app">
        Kahoot!
        <Question 
          questionText={this.state.questionText}
          answerChoiceOne={this.state.answerChoiceOne}
          answerChoiceTwo={this.state.answerChoiceTwo}
          answerChoiceThree={this.state.answerChoiceThree}
          answerChoiceFour={this.state.answerChoiceFour}
        />
      </div>
    );
  }
}

export default App;
