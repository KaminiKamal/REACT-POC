import { SIGNED_IN, USER_HOME, SET_COMPLETED } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setHome(goals) {//console.log("inside actions--->", goals);
  const action = {
    type: USER_HOME,
    userdata: goals
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
