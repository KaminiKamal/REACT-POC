import React, {	Component } from 'react';
import ReactDOM from 'react-dom';
import Input from 'muicss/lib/react/input';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { Router, Route, browserHistory } from 'react-router';
//import { Header }  from './contents/Header';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component
{
	constructor (props)
	{
		super(props);
		this.state=
		{
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	}

	signUp ()
	{
		console.log('this.state', this.props);
		browserHistory.push('/home');
		// const {email, password} = this.state;
		// firebaseApp.auth().createUserWithEmailAndPassword(email, password)
		// 	.catch(error =>
		// 	{
		// 		console.log('error');
		// 		this.setState({error})
		// 	})
	}

	render ()
	{
		return(
		<div className="body">

			<div className="login-page">

			 	<div className="form">
			 			<h3>Register Yourself</h3>
			 			<br />
			 			<div className="login-form">
			 			<div>
			 				<Input type="text" label="Student's Name" className="input" floatingLabel={true} />
			 				<Input type="text" label="Class" className="input" floatingLabel={true} />
			 				<Input type="text" label="Section" className="input" floatingLabel={true} />
			 				<Input type="text" label="Student's email" className="input" floatingLabel={true} />
			 				<Input type="text" label="Parent's Name" className="input" floatingLabel={true} />
			 				<Input type="text" label="Parent's Phone number" className="input" floatingLabel={true} />
			 				<Input type="text" label="Parent's email" className="input" floatingLabel={true} />

			 				<div>
			 					<Button className="button" onClick={() => this.signUp()} >Create</Button>
			 				</div>
			 			</div>
			 			<p>{this.state.error.message}</p>
			 			<div><Link to={'/signin'} >Already a member? Login</Link></div>
			 			<div><Link to={'/signin'} >Are you an admin? Create School</Link></div>
			 			</div>
			 	</div>
			</div>
		</div>
		)
	}
}

export default SignUp;
