import React, { Component } from 'react';

class QuestionStem extends Component {
  
  render() {
    return (
      <div className="questionText">
        {this.props.questionText}
      </div>
    );
  }
}

export default QuestionStem;