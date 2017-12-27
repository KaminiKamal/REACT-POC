import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

class RecentContactData extends Component {

  render() {

    let date = new Date(this.props.smsinfo.dueDate);
    let hours = date.getHours();
    let min = date.getMinutes();

    console.log("time",);
    return (
      <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSzHKD1xReS2Jz_ErUR2RqJY8eCIoYj_Nuy5ZiqVNIXMdL4ZB" alt="" className="circle" style={{width:"60px", height: "70px"}}/>
            <div style={{margin: "10px"}}>
              <span className="title">{this.props.smsinfo.text.name}</span>
              <p>{ hours+":"+ min} </p>
              <a href="#!" className="secondary-content">{this.props.smsinfo.text.message.substring(16, 22)}<i className="material-icons">grade</i></a>
            </div>
        </li>
        </ul>
      </div>
    );
  }
}

export default RecentContactData;
