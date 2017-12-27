import React, {	Component } from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends  Component{
	completeGoal(){
		const {email} = this.props.user;
		const {title, serverKey} = this.props.goal;
		console.log(serverKey);
		completeGoalRef.push({email, title});
		goalRef.child(serverKey).remove();
		//addto complete goals
		//remove the existing goals
	}

	render(){
		const {email, title} = this.props.goal;
		return(
			<div style={{margin: '5px'}}>
				<h3>List of added Goals</h3>
				<strong>{title}</strong>
				<span>  Submitted by: <em> {email} </em></span>
				<button className="btn btn-sm btn-primary" onClick={() => this.completeGoal()}> Complete </button>
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log('state inside mapStateToProps of addgoal', state);
	const { user } = state;
	return {
		user
	};
}

export default connect(mapStateToProps, null)(GoalItem);