import React, { Component } from 'react';
// import components
import QuestionStem from './QuestionStem';
import ResetButton from './ResetButton';
import AnswerButton from './AnswerButton';

class Question extends Component {
  
  render() {
    return (
      <div className="question">
        <QuestionStem 
          question={this.props.currentQuestion.question}
          answer={this.props.currentQuestion.choices[this.props.currentQuestion.correct_choice]}
          shouldShowAnswer={this.props.shouldShowAnswer}
        />
        <ResetButton />
        <div className="buttons">
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[0]}
            answerButtonClicked={this.props.answerButtonClicked}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[1]}
            answerButtonClicked={this.props.answerButtonClicked}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[2]}
            answerButtonClicked={this.props.answerButtonClicked}
          />
          <AnswerButton 
            answerChoice={this.props.currentQuestion.choices[3]}
            answerButtonClicked={this.props.answerButtonClicked}
          />
        </div>
    </div>
    );
  }
}

export default Question;




// import React from 'react';
// // import your components here


// export default function Question() {
//   return (
//     <div className="question">
//       Question Display
//       {/* Add QuestionStem */}
//       {/* Add Reset Button */}
//       <div className="buttons">
//         {/* Add Buttons */}
//       </div>
//     </div>
//   );
// }