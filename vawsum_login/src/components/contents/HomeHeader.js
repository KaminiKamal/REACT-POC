import React from 'react';
import Input from 'muicss/lib/react/input';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
require('../../js/script');


export class HomeHeader extends React.Component
{
	render()
	{
		return (
			<div>	
				<Appbar className="app-header">
					<ul>
						<li><span>Filter</span><Glyphicon glyph="filter" /></li>
						<li><Input label="Search ... " floatingLabel={true} /></li>
						<li><Glyphicon glyph="bell" /></li>
					</ul>
				</Appbar>
			</div>	
		);
	}
}