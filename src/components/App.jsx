import React, { Component } from 'react';
import '../css/App.css';

import Question from './Question';
import {
  getRandomQuestion,
} from '../clients/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null,
      shouldShowCorrectAnswer: false,
      shouldShowResetButton: false,
      seconds: 10,
      correctGuesses: 0,
    };
  }

  componentDidMount(){
    this.setRandomQuestion();
    this.startTimer();
  }

  _onAnswerButtonClicked(isCorrect){
    if(isCorrect){
      this.setState({correctGuesses: this.state.correctGuesses + 1})
    }
    console.log("isCorrect");
    this.showCorrectAnswer()
    this.showResetButton()
  }

  _onResetButtonClicked(){
    this.hideResetButton();
    this.hideCorrectAnswer();
    this.setRandomQuestion();
    this.startTimer();
  }

  startTimer(){
    this.setState({seconds: 10})
    let timer = setInterval(() => {
      if(this.state.seconds === 0) {
        clearInterval(timer);
        this.showCorrectAnswer();
        this.showResetButton();
      } else {
        this.setState({seconds: this.state.seconds - 1})
      }
    }, 1000);
  }

  showCorrectAnswer(){
    this.setState({shouldShowCorrectAnswer: true})
  }

  hideCorrectAnswer(){
    this.setState({shouldShowCorrectAnswer: false})
  }

  showResetButton(){
    this.setState({shouldShowResetButton: true})
  }

  hideResetButton(){
    this.setState({shouldShowResetButton: false})
  }

  async setRandomQuestion(){
    const randomQuestion = await getRandomQuestion();
    this.setState({currentQuestion: randomQuestion});
  }

  render() {
    return (
      <div className="app">
        <Question
          seconds={this.state.seconds}
          correctGuesses={this.state.correctGuesses}
          shouldShowCorrectAnswer={this.state.shouldShowCorrectAnswer}
          shouldShowResetButton={this.state.shouldShowResetButton}
          question={this.state.currentQuestion}
          onAnswerButtonClicked={(test)=>this._onAnswerButtonClicked(test)}
          onResetButtonClicked={()=>this._onResetButtonClicked()}
        />
      </div>
    );
  }
}

export default App;
