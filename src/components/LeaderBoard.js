import React from "react";
import { connect } from "react-redux";

const LeaderBoard = ({ userIds, users }) => (
  <div className='page-content'>
    <ul className='container'>
      {userIds.map((id, index) => {
        const user = users[id];
        return (
          <li key={id}>
            <div className='item'>
              <div className='badge' style={{borderColor: _getMedalColor(index) }}/>
              <div className='item-body'>
                <div className='avatar'>
                  <img alt={`Avatar of ${user.id}`} src={user.avatarURL}/>
                </div>
                <div className='item-content'>
                  <h3>{user.name}</h3>
                  <p>Answered questions: {_getAnsweredQuestionsCount(user)}</p>
                  <p>Created questions: {_getCreatedQuestionsCount(user)}</p>
                </div>
                <div className='score'>
                  <div className='score-content'>
                    <div className='item-header'>Score</div>
                    <div className='circle'>{_getUserScore(user)}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

const _getMedalColor = standing => {
  const color = {
    0: 'gold',
    1: 'silver',
    2: '#CD7F32'
  }[standing] || 'white';
  return `${color} transparent transparent transparent`
};

const _getAnsweredQuestionsCount = user => {
  return Object.keys(user.answers).length
};

const _getCreatedQuestionsCount = user => {
  return user.questions.length;
};

const _getUserScore = user => _getAnsweredQuestionsCount(user) + _getCreatedQuestionsCount(user);

function mapStateToProps({ users }) {
  const userIds = Object.keys(users).sort(
    (a, b) => _getUserScore(users[b]) - _getUserScore(users[a])
  );
  return {userIds, users}
}

export default connect(mapStateToProps)(LeaderBoard);
