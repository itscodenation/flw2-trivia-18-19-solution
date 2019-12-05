import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';
import {
  getRandomQuestion,
  buildFirebase,
} from '../clients/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      questions: null,
      currentQuestion: {
        question_text: null,
        choices: [],
        correct_choice_index:null,
      },
      shouldShowCorrectAnswer: false,
      shouldShowNextButton: false,
    };

    this.onAnswerButtonClicked = this.onAnswerButtonClicked.bind(this);
    this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
  }

  componentDidMount() {
    var firebaseDatabase = buildFirebase();

    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      var questions = snapshot.val();
      var question = getRandomQuestion(questions);
      this.setState({
        initialized: true,
        questions,
        currentQuestion: question
      })
    });
  }

  onAnswerButtonClicked(){
    this.setState({
      shouldShowCorrectAnswer: true,
      shouldShowNextButton: true
    });
  }

  onNextButtonClicked(){
    var question = getRandomQuestion(this.state.questions);
    console.log(question);
    this.setState({
      shouldShowCorrectAnswer: false,
      shouldShowNextButton: false,
      currentQuestion: question
    });
  }

  render() {
    if (!this.state.initialized) { return null; }
    return (
      <div className="app">
        <Question
          shouldShowCorrectAnswer={this.state.shouldShowCorrectAnswer}
          shouldShowNextButton={this.state.shouldShowNextButton}
          question={this.state.currentQuestion}
          onAnswerButtonClicked={this.onAnswerButtonClicked}
          onNextButtonClicked={this.onNextButtonClicked}
        />
      </div>
    );
  }
}

export default App;
