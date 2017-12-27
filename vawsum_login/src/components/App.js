import React, {	Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletedGoalsList from './CompletedGoalsList';

class App extends Component{
	signOut(){
		firebaseApp.auth().signOut();
	}
	render(){
		return(
			<div>
			<div>Welcome to goalCoach</div>
			<AddGoal />
			<hr></hr>
			<GoalList />
			<hr></hr>
			<h3>List of completed goals</h3>
			<CompletedGoalsList />
			<button className="btn btn-danger" onClick={() => this.signOut()} > Sign Out </button>
			</div>
		)
	}
}

function mapStateToProps(state){
	
	return {};
}

export default connect(mapStateToProps, null)(App);