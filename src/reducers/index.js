import {loadingBarReducer} from 'react-redux-loading';
import { combineReducers } from 'redux';
import authedUser from './authedUser';
import questions from './questions';
import users from './users';
import visual from './visual';

export default combineReducers({
  authedUser,
  questions,
  users,
  visual,
  loadingBar: loadingBarReducer
})

