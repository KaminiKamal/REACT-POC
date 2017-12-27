import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx";
import ContactBody from "./components/ContactBody.jsx";
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <ContactBody />
      </div>
    );
  }
}

export default Contact;
