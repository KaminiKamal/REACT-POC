import React from 'react';
import ReactDOM from 'react-dom';
import {bake_cookie, read_cookie} from 'sfcookies';
import AlertContainer from 'react-alert';
import NavBar from "./components/NavBar.jsx";
import { connect } from 'react-redux';
import { sms } from "./actions/index.js";
import 'whatwg-fetch';
import "./App.css";

class SendSMS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status: '',
      icon: '',
      text: {}
    };
  }
showAlert = () => {
    this.msg.show(this.state.status, {
      time: 4000,
      type: 'success',
      icon: <img src={this.state.icon} style={{width: "50px", height: "50px"}} />
    })
  }
  sendSms = () => {console.log("state", this.state.message);
    fetch('https://kaminishortid.herokuapp.com/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(
        {
          "recipient": read_cookie("user_number"),
          "message": this.state.message,
          "name": read_cookie("user_clicked")
        }
      )
    })
    .then(res => res.json())
    .then(response =>
    {console.log("jhfj", response);
    if(response.status===200)
    {
      this.setState({text: response.text});console.log("inside setState(text)", this.state.text);
      this.props.sms(this.state.text)
      this.setState({status: "Message sent"})
      this.setState({icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wpWMsUE9VQyh8iH0b1WG8SEoGrZ53nIrfyU73gls-W4UKLEy"})
      this.showAlert();
    }
    else{
        this.setState({status: "Message not sent"})
        this.setState({icon: "https://cdn3.iconfinder.com/data/icons/pretty-office-part-9-reflection-style/256/Email-not-validated.png"})
        this.showAlert();
    }
    });
  }
  componentDidMount()
  {
    let otp = Math.random()*1000000;
    let OTP = Math.trunc(otp);
    let message = "Hi. Your OTP is: "+OTP;
    this.setState({message : message})
  }

  render() {
    console.log("inside sms", read_cookie("user_clicked"),read_cookie("user_number"), read_cookie("user_id"))
    let userName = read_cookie("user_clicked");
    let userNumber = read_cookie("user_number");

    return (
      <div>
      <AlertContainer ref={a => this.msg = a}  />
      <NavBar />
      <h4 className="header"> {userName}</h4>
      <div className="card horizontal"  style={{padding: "10px"}}>
        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmo_UrnYXFgq84OOvvH4gkPaWgHEUsub3UsmHwYlvk2qam1Nw" style={{width: "50%", height: "70%"}}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
          <h5>{userNumber}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s10">
          <input type="text" value={this.state.message}/>
        </div>
        <div className="input-field col s2">
          <a className="btn btn-floating btn-large cyan pulse" onClick={this.sendSms}><i className="material-icons">send</i></a>
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state)
{
 const { text } = state;console.log("inside mapstateto props smsList",state, text);
  return{
	text
  }
}
export default connect(mapStateToProps, { sms })(SendSMS);
