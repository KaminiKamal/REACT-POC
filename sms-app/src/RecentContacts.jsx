import React, { Component } from 'react';
import {browserHistory} from "react-router";
import {smsList} from "./actions/index.js";
import { connect } from 'react-redux';
import RecentContactData from "./RecentContactData.jsx";
import NavBar1 from "./components/NavBar1.jsx";
import './App.css';

class RecentContacts extends Component {
  contactDetails = () =>
  {//console.log("this.context", this.context)
    browserHistory.push("/contact-info");
  }
  componentDidMount()
  {
    this.props.smsList();
  }

  render() {
    {
      if(this.props.sms_list!==undefined)
      {
        var listOfsms = this.props.sms_list
        .sort((a, b) => a.dueDate < b.dueDate)
        .map((el, i) => {console.log("kk", el);
          return <RecentContactData smsinfo = {el} key={i} />
        })
      }
    }
    return (
      <div>
      <NavBar1 />
      {listOfsms}
      </div>
    );
  }
}
function mapStateToProps(state)
{
  let info = {
    sms_list : state
  }
 const { sms_list } = state;console.log("inside mapstateto props",state, sms_list);
  return{
	sms_list
  }
}
export default connect(mapStateToProps, { smsList })(RecentContacts);
