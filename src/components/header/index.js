import React from 'react';
require("./header.css")
export default class Header extends React.Component {

	constructor(props) {
    	super(props);
	}

	render() {
		return ( 
			<header>
				<h1>{this.props.name}</h1>
				<nav className='topnav'>
					<ul>
						<li><a href='/genres'>Genres</a></li>
						<li><a href='/movies?watched=false'>Unwatched</a></li>
						<li><a href='/movies?sort=addedToDb'>Recent</a></li>
						<li><a href='/admin'>Admin</a></li>
					</ul>
				</nav>
			</header>
		);
	}
}