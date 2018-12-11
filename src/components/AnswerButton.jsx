import React, { Component } from 'react';

class AnswerButton extends Component {
  
  render() {
    return (
      <div className="button">
        {this.props.answerChoice}
      </div>
    );
  }
}

export default AnswerButton;