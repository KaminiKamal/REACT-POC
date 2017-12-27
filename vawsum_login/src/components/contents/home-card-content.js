import React, { Component } from 'react';
import userImage from '../../images/user.png';
//import HomeCardContent from './contents/home-card';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { PropTypes } from 'react';
// import { setHome } from '../../actions/index';
//import { Router, Route, browserHistory } from 'react-router';
import '../../css/style.css';
import '../../css/materialize.min.css';


class HomeContent extends Component{

	render()
	{
		//console.log("inside homeCardContent", this.props.userCardContent);
		return(
			<div>
				  <div className="card-image col s2">
				    <img src={userImage} className="circle" style={{width:"70px"}}/>
				  </div>
				  <div className="col s10">
				    <span>{this.props.userCardContent.userName}</span><br />
				    <span>{this.props.userCardContent.userDesignation}</span><span style={{fontSize: "10px", paddingLeft:"10px", color:"#999966"}}> {this.props.userCardContent.time} </span>
				    <div style={{marginLeft:"-70px"}}>
				    <div className="chips">|| Hindi</div><div className="chips">|| Hindi</div><span className="badge">|| Hindi</span>
				    </div>
				  </div>
				  <br />
				  <br />
				  <br />
				  <div className="card-content">
				    <p style={{marginLeft:"-20px"}}>{this.props.userCardContent.feed}</p>
				  </div>
				  <div className="card-action" style={{marginBottom:"-10px"}}>
				    <div className="row">
				      <div className="col s4" style={{marginBottom:"-20px"}}>
				        <span><i className="material-icons">thumb_up</i></span><span style={{verticalAlign: "top"}}>Vawsum</span>
				      </div>
				      <div className="col s4" style={{marginBottom:"-20px"}}>
				        <span><i className="material-icons">comment</i></span><span style={{verticalAlign: "top"}}>comment</span>
				      </div>
				      <div className="col s4" style={{marginBottom:"-20px"}}>
				        <span><i className="material-icons">share</i></span>
				        <span style={{verticalAlign: "top"}}>share</span>
				      </div>

				  </div>
				</div>
			</div>
		)
	}
}

export default HomeContent;
