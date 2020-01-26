import {getInitialData} from '../utils/api';
import {receiveQuestions} from './questions';

export const handleInitialData = () => dispatch => {
  getInitialData().then(({questions, users}) => {
    console.log(questions, users);
    dispatch(receiveQuestions(questions))
  })
};
