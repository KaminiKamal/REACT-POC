import { CONTACTLIST_LIST, SHOW_CONTACT, SHOW_SMS, SMS_RECENT } from '../constants/constants.jsx';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
	return {
		text: action.text,
		dueDate: action.dueDate
	}
}

export default (state = [], action) => {
  state = read_cookie('reminders');
  let reminders = null;
  switch(action.type) {
    case CONTACTLIST_LIST:
      const { responseObject } = action;console.log("inside reducer",responseObject);
      return responseObject;

    case SHOW_CONTACT:
        const { userInfo } = action;console.log("inside userinfo",userInfo);
        return userInfo;

    case SHOW_SMS:
          reminders = [...state, reminder(action)]
          bake_cookie('reminders', reminders);console.log("inside ADD_REMINDER 2", state);
          console.log('reminders as state', reminders);
          let text = {text: read_cookie('reminders')}
          return text;

    case SMS_RECENT:
          let data = read_cookie('reminders');console.log("read cookie", read_cookie('reminders'));
          return {sms_list : data};

    default:
      return state;
  }
}
