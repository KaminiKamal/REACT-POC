import React, { Component } from 'react';
// import logo from './logo.svg';
//import './App.css';
import Header from "./Header";
import HomeTabContent from "./HomeTabContent";
import HomeCard from './contents/home-card';
import userImage from '../images/user.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'react';
import { setHome } from '../actions/index';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import '../css/style.css';
import '../css/materialize.min.css';

class HomePage extends Component
{
    constructor(props)
  {
   super(props);
   this.state=
   {
	 diary: '',
	 userInfo: []
   }
  }
  componentDidMount()
  {
	let userData = [];
	const url = "https://institution.vawsum.com/api/feed_list?feed_type=all&group_id=all&school_id=325737&feed_fav=no&position_feed_id=0&user_id=325903&feed_position=top&limit=12 HTTP/1.1";
	fetch(url,
	{
	  method: "GET"
	})
	.then(response => response.json())
	.then(res =>
{
	res.data.forEach(function(el, i){
	console.log(el);
		userData.push({
			feed: el.Feed.feed,
			time:  el.Feed.formatted_time,
			userDesignation: el.User.designation,
			userName: el.User.name,
			profilePhoto: el.User.profile_photo
		});
	});
	this.props.setHome(userData);//console.log("inside didmount", this.props.userHome);

})
}

	render()
	{
		return (
				<div className="HomePage">
					<div className="container-fluid">
						<Header />
						<HomeTabContent />
            <ul className="collection">
              <li className="collection-item avatar">
                <img src={userImage} alt="" className="circle" />
                <textarea placeholder="Make a diary entry ... "></textarea>
              </li>
            </ul>
            {
              this.props.userHome.map((value, key) =>
              {
              return <HomeCard userCard={value} key ={key} />
              })
            }
					</div>
				</div>
		);
	}
}

function mapStateToProps(state)
{
 const { userHome } = state;// console.log("inside mapstateto props", userHome);
  return{
	userHome
  }
}



export default connect(mapStateToProps, { setHome })(HomePage);
