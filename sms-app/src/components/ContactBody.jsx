import React, { Component } from 'react';
import { CONTACT_API } from "../constants/config.jsx";
import { connect } from 'react-redux';
import { storeContactList, showContact } from "../actions/index.js";
import { browserHistory } from "react-router";
import '../App.css';
import userM from "../images/user.png";
import userF from "../images/user1.png";
import ContactInfo from "../ContactInfo.jsx";
class ContactBody extends Component {
  constructor(props)
{
  super(props);
  this.state =
  {
    responseObject: []

  }
}
onItemClick(item, e)
{
  console.log("hi", this.props)
  this.props.showContact(item);
//this.setState({lname: item.lname});console.log("selectedContact", this.state.lname)
  //browserHistory.push("/contact-info");
}

componentDidMount()
{
  fetch(CONTACT_API)
  .then(res => res.json())
  .then(response => {
    console.log("response", response);
    this.setState({responseObject: response});console.log("stata", this.state.responseObject)
    this.props.storeContactList(this.state.responseObject)
  })

}
  render() {console.log("this.props", this.props)
  {
    if(this.props.fname!==undefined){
      var userdata = <ContactInfo userinfo={this.props} />
      return userdata;
    }
    if(this.props.responseObject!==undefined){
      var data = this.props.responseObject.contact_list.map((el, i) => {
        if(el.gender==="M"){
          let boundItemClick = this.onItemClick.bind(this, el);
          return  <li className="collection-item avatar" value={el} key={i} onClick={boundItemClick}>
                    <img src={ userM } alt="" className="circle" />
                      <span className="title">{el.fname} {el.lname}</span>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
        }
        if(el.gender==="F"){
          let boundItemClick = this.onItemClick.bind(this, el);
          return  <li className="collection-item avatar" key={i} onClick={boundItemClick}>
                    <img src={ userF } alt="" className="circle" />
                      <span className="title">{el.fname} {el.lname}</span>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                  </li>
        }

      })
    }

  }

    return (
      <div>
        <div className="collection">
          { data }
          {userdata}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state)
{
  const {lname, fname, number, id} = state;
 const { responseObject } = state;console.log("inside mapstateto props", lname, fname, number, id);
  return{
	responseObject,
  lname, fname, number, id
  }
}
export default connect(mapStateToProps, { storeContactList, showContact })(ContactBody);;
