import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question'
import {
  getRandomQuestion,
  buildFirebase,
} from '../clients/firebase';

var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      questions: {},
      questionText: null,
      answerChoiceOne: null,
      answerChoiceTwo: null,
      answerChoiceThree: null,
      answerChoiceFour: null,
    }
    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      var question = getRandomQuestion(snapshot.val());
      this.setState({
        questions: snapshot.val(),
        questionText: question.question_text,
        answerChoiceOne: question.choices[0],
        answerChoiceTwo: question.choices[1],
        answerChoiceThree: question.choices[2],
        answerChoiceFour: question.choices[3],
      })
    });
  }

  onResetButtonClicked(){
    var question = getRandomQuestion(this.state.questions);
    this.setState({
      questionText: question.question_text,
      answerChoiceOne: question.choices[0],
      answerChoiceTwo: question.choices[1],
      answerChoiceThree: question.choices[2],
      answerChoiceFour: question.choices[3],
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
          resetButtonClicked={()=>this.onResetButtonClicked()}
        />
      </div>
    );
  }
}

export default App;
