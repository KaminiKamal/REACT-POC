import React, {	Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import { goalRef } from '../firebase';

class AddGoal extends Component{
	constructor(props){
		super(props);
		this.state=
		{
			title: ''
		}
	}

	addGoals()
	{	
		const { title } = this.state;
		const { email } = this.props.user;
		goalRef.push({ email, title })
		console.log('this.state', this.state);
		console.log('this.props.user', this.props.user);
		//const {email, password} = this.state;
		// firebaseApp.auth().createUserWithEmailAndPassword(email, password)
		// 	.catch(error => {
		// 		console.log('error');
		// 		this.setState({error})
		// 	})
	}

	render(){
		return(
			<div>
			<div style={{margin:'0%'}} className="form-inline">
				<h2>Add Goals</h2>
				<div style={{margin:'5%'}} className="form-group">
					<input type="text" placeholder="Add Goals ... " style={{margin:'5%'}} className="form-control" onChange={event => this.setState({title: event.target.value})} />
					<div>
						<button style={{margin:'5%'}} className="btn btn-success" type="button" onClick={() => this.addGoals()} >Add Goal</button>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	
	const { user } = state;
	return {
		user
	};
}

export default connect(mapStateToProps, null)(AddGoal);
