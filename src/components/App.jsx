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

  _onAnswerButtonClicked(){
    this.setState({shouldShowCorrectAnswer: true})
    this.setState({shouldShowResetButton: true})
  }

  _onResetButtonClicked(){
    this.setRandomQuestion()
    this.setState({shouldShowCorrectAnswer: false})
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
