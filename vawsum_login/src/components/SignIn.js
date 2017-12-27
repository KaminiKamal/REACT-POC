import React, {	Component } from 'react';
import ReactDOM from 'react-dom';
import {bake_cookie, read_cookie} from 'sfcookies';
import Input from 'muicss/lib/react/input';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import { Router, Route, browserHistory } from 'react-router';

class SignIn extends Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			email: '',
			password: '',
			username: '',
			error:
			{
				message: ''
			}
		}
	}

	signIn()
	{
		console.log('this.state', this.props);
		const {email, password} = this.state;

		const url = 'https://institution.vawsum.com/api/login';

		var details =
		{
			'user_name': this.state.email,
			'password': this.state.password,
			'device_type': window.navigator.userAgent
		};

		var formBody = [];

		for (var property in details)
		{
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(details[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}

	  	formBody = formBody.join("&");

		fetch(url,
		{
			method: 'POST',
			headers:
			{
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
		})
		.then(response => response.json())
		.then(res =>
		{
			console.log("response", res);

			if(res.message !== "0")
			{
				let loggedUser = "Welcome user " + res.data.Userinfo.User.user_name + " You are successfully logged in!";

				this.setState(
				{
					username: loggedUser
				});

				localStorage.setItem("username", res.data.Userinfo.User.user_name);
				localStorage.setItem("email", res.data.Userinfo.User.email);

				browserHistory.push('/homepage');//console.log("route to home page", localStorage.getItem("email"));
			}
			else
			{
				alert("Invalid credentials");
			}
		});
	}

	render()
	{
		return(

			<div className="body">
				<div className="login-page">
					<div className="form">
						<h3>Sign In</h3>
						<br />
						<div className="login-form">
							<div>
								<Input type="text" label="Username" className="input" floatingLabel={true}  onChange={event => this.setState({email: event.target.value})} />
								<Input type="password" label="Password" className="input" floatingLabel={true}   onChange={event => this.setState({password: event.target.value})} />
								<div>
									<Button className="button" onClick={() => this.signIn()} >SignIn</Button>
								</div>
							</div>
							<p>{this.state.username}</p>
							<div><Link to={'/signup'} >Sign Up Instead</Link></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;
