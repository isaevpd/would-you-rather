import React from 'react';
import {connect} from 'react-redux';

const PollResults = ({authedUser, questionAuthorName, authorAvatarURL, question}) => (
  <div className='page-content'>
    <div className='item'>
      <div className='item-header'>Asked by {questionAuthorName}</div>
      <div className='item-body'>
        <div className='avatar'>
          <img alt={`avatar of ${questionAuthorName}`} src={authorAvatarURL}/>
        </div>
        <div className='item-content'>
          <div>
            <div>{question.optionOne.votes.includes(authedUser) && <span>you picked this option</span>}</div>
            <div>{question.optionOne.text}: {question.optionOne.votes.length}</div>
          </div>
          <br/>
          <br/>
          <div>
            <div>{question.optionTwo.votes.includes(authedUser) && <span>you picked this option</span>}</div>
            <div>{question.optionTwo.text}: {question.optionTwo.votes.length}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function mapStateToProps({ authedUser, questions, users}, { id }) {
  const question = questions[id];
  const questionAuthorName = users[question.author].name;
  return {
    authedUser,
    question,
    questionAuthorName,
    authorAvatarURL: users[question.author].avatarURL
  }
}


export default connect(mapStateToProps)(PollResults);
