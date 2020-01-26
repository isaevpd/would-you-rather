import {ADD_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions';


export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      // const { quesiton } = action;
      console.log('Look im processing a question');
      return state;
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state
  }
}

