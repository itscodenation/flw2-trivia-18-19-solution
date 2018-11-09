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
    };
  }

  componentDidMount(){
    this.setRandomQuestion();
  }

  _onAnswerButtonClicked(isCorrect){
    this.showCorrectAnswer()
    this.showResetButton()
  }

  _onResetButtonClicked(){
    this.hideResetButton();
    this.hideCorrectAnswer();
    this.setRandomQuestion();
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
      <Question
        shouldShowCorrectAnswer={this.state.shouldShowCorrectAnswer}
        shouldShowResetButton={this.state.shouldShowResetButton}
        question={this.state.currentQuestion}
        onAnswerButtonClicked={(test)=>this._onAnswerButtonClicked(test)}
        onResetButtonClicked={()=>this._onResetButtonClicked()}
      /> 
    );
  }
}

export default App;
