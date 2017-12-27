import { USER_HOME } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case USER_HOME:
      const { userdata } = action;console.log("inside reducer", state, action);
      return userdata;
    default:
      return state;
  }
}
