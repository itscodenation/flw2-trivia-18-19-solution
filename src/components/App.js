import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {getQuestions} from '../clients/firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
    };
  }
  
  async componentDidMount(){
    const questions = await getQuestions();
    this.setState({questions: questions});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.questions.test}
        </header>
      </div>
    );
  }
}

export default App;
