import {hideLoading, showLoading} from 'react-redux-loading';
import {saveQuestion, saveQuestionAnswer} from '../utils/api';
import {handleInitialData} from './shared';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


export const handleAddQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {

  const { authedUser } = getState();

  dispatch(showLoading());

  saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser,
  })
    .then(question => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))

};


const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
};

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
};


export const handleAddQuestionAnswer = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());

  saveQuestionAnswer({
    authedUser,
    qid,
    answer
  })
    .then(() => {
      dispatch(handleInitialData());
    })
    .then(() => dispatch(hideLoading()))
};


