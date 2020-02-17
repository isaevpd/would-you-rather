import {SELECT_TAB} from '../actions/shared';


export default function visual(state = {}, action) {
  if (action.type === SELECT_TAB) {
    return {
      ...state,
      tab: action.tab
    }
  }
  return state
}
