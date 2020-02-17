import {hideLoading, showLoading} from 'react-redux-loading';
import {getInitialData} from '../utils/api';
import {receiveQuestions} from './questions';
import {receiveUsers} from './users';

export const SELECT_TAB = 'SELECT_TAB';

export const switchTab = tab => {
  return {
    type: SELECT_TAB,
    tab
  }
};


export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  return getInitialData().then(({questions, users}) => {
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(hideLoading());
  })
};
