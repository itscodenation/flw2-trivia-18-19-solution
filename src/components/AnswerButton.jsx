import React, { Component } from 'react';

class AnswerButton extends Component {
  
  render() {
    return (
      <div className="button"
      onClick={this.props.answerButtonClicked}
      >
        {this.props.answerChoice}
      </div>
    );
  }
}

export default AnswerButton;