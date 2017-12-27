import { CONTACTLIST_LIST, SHOW_CONTACT, SHOW_SMS, SMS_RECENT } from '../constants/constants.jsx';

export function storeContactList(responseObject) {
  const action = {
    type: CONTACTLIST_LIST,
    responseObject
  }
  return action;
}
export function showContact(userInfo) {console.log("inside action userInfo", userInfo);
  const action = {
    type: SHOW_CONTACT,
    userInfo
  }
  return action;
}

export const sms = (data) => {
  const action = {
    type: SHOW_SMS,
    text: data,
    dueDate: new Date()
  }
  console.log('action in addReminder', action);
  return action;
}

export const smsList = () =>
{
  const action =
  {
  type: SMS_RECENT
  }
  return action;
}
