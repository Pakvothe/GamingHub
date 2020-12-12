import React from 'react';
import SearchBar from '../search_bar';
import NavbarStyled from '../styles/styled_navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<NavbarStyled>
			<h1>
				<Link to='/'>
					Gaming<span>HUB</span>
				</Link>
			</h1>
			<SearchBar />
			<Link to='/admin/products'>
				Admin
			</Link>
		</NavbarStyled>
	)
}

export default Navbar
