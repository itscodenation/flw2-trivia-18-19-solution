import React, { Component } from 'react';

class QuestionStem extends Component {
  
  render() {
    let display;
    if (this.props.shouldShowAnswer){
        display = `The correct answer is ${this.props.answer}`;
    } else {
        display =this.props.question
    }

    return (
      <div className="">
        {display}
      </div>
    );
  }
}

export default QuestionStem;