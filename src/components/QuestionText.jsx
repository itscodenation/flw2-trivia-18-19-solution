import React, { Component } from 'react';

class QuestionText extends Component {
  
  render() {

    return (
      <div className="questionText">
        {this.props.questionText}
      </div>
    );
  }
}

export default QuestionText;