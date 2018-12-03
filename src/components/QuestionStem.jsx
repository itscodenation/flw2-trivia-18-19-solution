import React, { Component } from 'react';

class QuestionStem extends Component {
  
  render() {
    return (
      <div className="">
        {this.props.question}
      </div>
    );
  }
}

export default QuestionStem;