import { combineReducers } from 'redux';
import user from './reducer_user';
import userHome from './reducer_goals';
import completeGoals from './reducer_completed_goals';

export default combineReducers({
  userHome
})
