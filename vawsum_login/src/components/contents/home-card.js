import React, { Component } from 'react';
import userImage from '../../images/user.png';
import HomeContent from './home-card-content';
import '../../css/style.css';
import '../../css/materialize.min.css';


class HomeCard extends Component
{

	render()
	{
		//console.log("inside homeCard", this.props.userCard);
		return(
			<div>
				<div className="col s12">
				  <div className="card">
				    <HomeContent userCardContent={this.props.userCard} />
				</div>
				</div>
			</div>
		)
	}
}

export default HomeCard;
