import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Contact from "./Contact.jsx";
import ContactInfo from "./ContactInfo.jsx";
import SendSMS from "./SendSMS.jsx";
import RecentContacts from "./RecentContacts.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
          <Route path={"/"} component={ Contact } />
          <Route path={"/contact-info"} component={ ContactInfo } />
          <Route path={"/send-sms"} component={ SendSMS } />
          <Route path={"/sms-recent"} component={ RecentContacts } />
        </Router>
    );
  }
}

export default App;
