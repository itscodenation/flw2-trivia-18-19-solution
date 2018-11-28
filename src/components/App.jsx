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
    };
  }

  componentDidMount(){
    this.setRandomQuestion();
  }

  _onAnswerButtonClicked(){
    this.setState({shouldShowCorrectAnswer: true})
    this.setRandomQuestion();
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
          question={this.state.currentQuestion}
          onAnswerButtonClicked={()=>this._onAnswerButtonClicked()}
        />
      </div>
    );
  }
}

export default App;
