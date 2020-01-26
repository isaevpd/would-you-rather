import React from 'react';
import {connect} from 'react-redux';

const Question = ({question}) => (
  <div>{question.optionOne.text} || {question.optionTwo.text}</div>
);

function mapStateToProps({ questions }, {id}) {
  const question = questions[id];
  return {
    question
  }
}

export default connect(mapStateToProps)(Question);
