import React, {	Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import { Link } from 'react-router';
import CompletedGoalsList from './CompletedGoalsList';
import { HomeHeader } from './contents/HomeHeader';

class Home extends Component{
	signOut(){
		firebaseApp.auth().signOut();
	}
	render(){
		return(
			<div>
			<HomeHeader />
			<AddGoal />
			<hr></hr>
			<div><Link to={'/homepage'}>HomePage</Link></div>
			<div><Link to={'/signup'} >Sign Up Instead</Link></div>
			<div><Link to={'/accountverify'} >Account Verify</Link></div>
			<div><Link to={'/chatscreen'} >Chat Screen</Link></div>
			<div><Link to={'/signin'} >Login </Link></div>
			<div><Link to={'/feeparent1'} > feeparent1</Link></div>
			<div><Link to={'/feesadmin1'} > feesadmin1</Link></div>
			<div><Link to={'/feesadmin2'} > feesadmin2</Link></div>
			<div><Link to={'/feeparent2'} > feeparent2</Link></div>
			<div><Link to={'/filterscreen'} > filterscreen</Link></div>
			<div><Link to={'/homescreen'} > homescreen</Link></div>
			<div><Link to={'/inbox'} > inbox</Link></div>
			<div><Link to={'/markui1'} > mar'</Link></div>
			<div><Link to={'/feereceiptadmin'} >feereceiptadmin </Link></div>
			<div><Link to={'/postupdateannouncement'} > postupdateannouncement</Link></div>
			<div><Link to={'/postupdateplacement'} > postupdateplacement</Link></div>
			<div><Link to={'/postupdatequiz'} > postupdatequiz</Link></div>
			
			<div><Link to={'/registerschool'} >registerschool </Link></div>
			<div><Link to={'/registeruserstudent'} > registeruserstudent</Link></div>
			<div><Link to={'/searchusers'} > searchusers</Link></div>
			<div><Link to={'/searchdiaries'} >searchdiaries </Link></div>
			<div><Link to={'/sidebar'} >sidebar </Link></div>
			<div><Link to={'/splashscreen'} >splashscreen </Link></div>
			<div><Link to={'/postupdatepoll'} >postupdatepoll </Link></div>
			<div><Link to={'/postupdateevent'} > postupdateevent</Link></div>
			
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

export default connect(mapStateToProps, null)(Home);