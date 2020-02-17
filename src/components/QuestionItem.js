import React from 'react';
import {connect} from 'react-redux';

const QuestionItem = ({question, handleViewPoll, getFullName, getAvatarURL}) => (
  <div className='item'>
    <div className='item-header'>{`${getFullName(question.author)} asks:`}</div>
    <div className='item-body'>
      <div className='avatar'>
        <img alt={`Avatar of ${question.author}`} src={getAvatarURL(question.author)}/>
      </div>
      <div className='item-content'>
        <h3>Would you rather</h3>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
        <button onClick={handleViewPoll}>View poll</button>
      </div>
    </div>
  </div>
);

function mapStateToProps({ questions }, {id}) {
  const question = questions[id];
  return {
    question
  }
}

export default connect(mapStateToProps)(QuestionItem);
