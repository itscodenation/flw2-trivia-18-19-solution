import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';
import {
  getRandomQuestion,
  buildFirebase,
} from '../clients/firebase';

var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);

    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      var question = getRandomQuestion(snapshot.val());
      this.setState({
        questions: snapshot.val(),
        currentQuestion: question
      })
    });
    
    this.state = {
      questions: null,
      currentQuestion: {
        question_text: null,
        choices: [],
        correct_choice_index:null,
      },
      shouldShowCorrectAnswer: false,
      shouldShowResetButton: false,
    };
  }

  _onAnswerButtonClicked(){
    this.setState({shouldShowCorrectAnswer: true})
    this.setState({shouldShowResetButton: true})
  }

  _onResetButtonClicked(){
    this.setState({shouldShowCorrectAnswer: false})
    this.setState({shouldShowResetButton: false})
    var question = getRandomQuestion(this.state.questions);
    console.log(question);
    this.setState({currentQuestion: question})
  }

  render() {
    return (
      <div className="app">
        <Question
          shouldShowCorrectAnswer={this.state.shouldShowCorrectAnswer}
          shouldShowResetButton={this.state.shouldShowResetButton}
          question={this.state.currentQuestion}
          onAnswerButtonClicked={()=>this._onAnswerButtonClicked()}
          onResetButtonClicked={()=>this._onResetButtonClicked()}
        />
      </div>
    );
  }
}

export default App;
