(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),s=n(65),c=n.n(s),u=(n(50),n(66)),a=n(67),i=n(70),l=n(68),h=n(71);function d(e){var t,n=e.questionText,o=e.shouldShowCorrectAnswer,s=e.correctAnswer;return t=o?"The correct answer is "+s:n,r.a.createElement("div",{className:"questionStem"},t)}function w(e){var t=e.answerText,n=(e.correctChoice,e.choice,e.onAnswerButtonClicked);e.shouldShowCorrectAnswer;return r.a.createElement("div",{className:"button",onClick:function(){return n()}},t)}function m(e){var t=e.onNextButtonClicked;return e.shouldShowNextButton?r.a.createElement("div",{className:"next-button",onClick:t},"Next Question"):null}function v(e){var t=e.question,n=(e.seconds,e.shouldShowCorrectAnswer),o=e.shouldShowNextButton,s=e.onAnswerButtonClicked,c=e.onNextButtonClicked;return t?r.a.createElement("div",{className:"question"},r.a.createElement(d,{questionText:t.question_text,shouldShowCorrectAnswer:n,correctAnswer:t.choices[t.correct_choice_index]}),r.a.createElement(m,{shouldShowNextButton:o,onNexButtonClicked:c}),r.a.createElement("div",{className:"buttons"},r.a.createElement(w,{answerText:t.choices[0],onAnswerButtonClicked:s}),r.a.createElement(w,{answerText:t.choices[1],onAnswerButtonClicked:s}),r.a.createElement(w,{answerText:t.choices[2],onAnswerButtonClicked:s}),r.a.createElement(w,{answerText:t.choices[3],onAnswerButtonClicked:s}))):null}var C=n(48),x=n.n(C);function B(e){var t=Object.keys(e);return e[t[Math.floor(Math.random()*t.length)]]}var S=function(){var e=x.a.initializeApp({apiKey:"AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",authDomain:"studio-trivia-db.firebaseapp.com",databaseURL:"https://studio-trivia-db.firebaseio.com",projectId:"studio-trivia-db",storageBucket:"studio-trivia-db.appspot.com",messagingSenderId:"736024037811"});return x.a.database(e)}(),k=function(e){function t(e){var n;return Object(u.a)(this,t),n=Object(i.a)(this,Object(l.a)(t).call(this,e)),S.ref("/questions").on("value",function(e){var t=B(e.val());n.setState({questions:e.val(),currentQuestion:t})}),n.state={questions:null,currentQuestion:{question_text:null,choices:[],correct_choice_index:null},shouldShowCorrectAnswer:!1,shouldShowNextButton:!1},n}return Object(h.a)(t,e),Object(a.a)(t,[{key:"_onAnswerButtonClicked",value:function(){this.setState({shouldShowCorrectAnswer:!0}),this.setState({shouldShowNextButton:!0})}},{key:"_onNextButtonClicked",value:function(){this.setState({shouldShowCorrectAnswer:!1}),this.setState({shouldShowNextButton:!1});var e=B(this.state.questions);console.log(e),this.setState({currentQuestion:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(v,{shouldShowCorrectAnswer:this.state.shouldShowCorrectAnswer,shouldShowNextButton:this.state.shouldShowNextButton,question:this.state.currentQuestion,onAnswerButtonClicked:function(){return e._onAnswerButtonClicked()},onNextButtonClicked:function(){return e._onNextButtonClicked()}}))}}]),t}(o.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))},50:function(e,t,n){},72:function(e,t,n){e.exports=n(159)}},[[72,2,1]]]);
//# sourceMappingURL=main.e180c201.chunk.js.map