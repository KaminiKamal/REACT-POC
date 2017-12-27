import React, { Component } from 'react';
import logo from '../css/Header.css';
import '../css/App.scss';

class Header extends Component
{
	render()
	{
		return (
				<div className="Header Top-Header">
					<div className="row">
						<div className="input-field col s3">
							<div>
									<label className="label-icon" style={{color:"#fff"}}>FILTER
									<i className="material-icons" style={{color:"#fff", paddingLeft: "5px"}}>
										filter
									</i>
									</label>
							</div>
						</div>
						<div className="input-field col s6">
							<input id="first_name" placeholder="Search Users ..." type="text" className="validate" style={{color:"#fff",padding: "0px 20px 0px 50px", marginRight:"-20px", marginLeft:"-10px", textAlign: "middle"}} />
							<label className="label-icon">
								<i className="material-icons" style={{padding: "0px 30px 0px 10px"}}>
									search
								</i>
							</label>
						</div>
						<div className="input-field col s3">
							<div>
								<label className="label-icon">
									<i className="material-icons" style={{color:"#fff",margin: "0px 0px 0px 55px"}}>
										notifications
									</i>
									<span className=" bubble-notify">
										4
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				);
	}
}

export default Header;
