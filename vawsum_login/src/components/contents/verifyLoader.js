import React from 'react';
import Input from 'muicss/lib/react/input';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

export default class verifyLoader extends React.Component
{
	render()
	{
		return (
		<div>	
			<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<Button type="button" className="navbar-toggle">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							</Button>
							<span className="navbar-brand">
							<img  src="/img/logo.png" />
							</span>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li>Services</li>
								<li>Testimonials</li>
								<li className="btn-trial">Try Us</li>
								<li>Features</li>
							</ul>
						</div>
					</div>
				</nav>
		</div>	
		);
	}
}