import React, {	Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component{

	componentDidMount(){
		let goals = [];
		goalRef.on('value', snap => {
			snap.forEach(goal => {
				let goalObject = goal.val();
				const { email, title } = goalObject;
				const serverKey = goal.key;
				goals.push({email, title, serverKey});
				console.log('goal', goal);
			})
			
			this.props.setGoals(goals);
		})
	}

	render(){
		return(
			<div>
				{
					this.props.goals.map((goal, index) => {
						return(
							<GoalItem key={index} goal={goal}/>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log('state inside mapStateToProps of addgoal', state);
	const { goals } = state;
	return {
		goals
	};
}

export default connect(mapStateToProps, { setGoals })(GoalList);
