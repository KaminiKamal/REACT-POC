import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx";
import SendSMS from "./SendSMS.jsx";
import {sms} from "./actions/index.js";
import { connect } from 'react-redux';
import {bake_cookie, read_cookie} from 'sfcookies';
import { browserHistory } from "react-router";
import './App.css';

class ContactInfo extends Component {
constructor(props)
{
  super(props);
  if(this.props.userinfo!==undefined){
    bake_cookie("user_clicked", this.props.userinfo.fname+" "+this.props.userinfo.lname);
    bake_cookie("user_number", this.props.userinfo.number);
    bake_cookie("user_id", this.props.userinfo.id);
  }


}

  sendSMS(){
    console.log("inside sms", read_cookie("user_clicked"),read_cookie("user_number"), read_cookie("user_id"))
    console.log("jhrgfvjrg");
    browserHistory.push("/send-sms");

    //localStorage.setItem('user_selected', );
  }

  render() {console.log("status hh", this.props.status);
    return (
      <div className="col s12 m7" style={{padding: "20px"}}>
        <h4 className="header"> {this.props.userinfo.fname} {this.props.userinfo.lname}</h4>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmo_UrnYXFgq84OOvvH4gkPaWgHEUsub3UsmHwYlvk2qam1Nw" style={{width: "50%", height: "70%"}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>{this.props.userinfo.number}</h5>
              </div>
            <div className="card-action">
              <a className="btn-floating halfway-fab waves-effect waves-light red btn-large" onClick={this.sendSMS.bind()}><i className="material-icons">chat</i></a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state)
{
 const { status } = state;console.log("inside mapstateto props",state, status);
  return{
	status
  }
}
export default connect(mapStateToProps, { sms })(ContactInfo);
