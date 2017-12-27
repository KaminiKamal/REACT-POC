import React, { Component } from 'react';
import {browserHistory} from "react-router";
import '../App.css';

class NavBar extends Component {
  contactDetails = () =>
  {
    browserHistory.push("/sms-recent");
  }
  contactList = () =>
  {
    browserHistory.push("/");
  }
  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><i className="material-icons">account_circle</i>Contacts</a>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab col s5" onClick={this.contactList}><a  className="active">Contact List</a></li>
              <li className="tab col s5" onClick={this.contactDetails}><a>Contact Info</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
