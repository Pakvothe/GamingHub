import React from 'react';
import SearchBar from '../search_bar';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import { Link } from 'react-router-dom';
import logoDual from '../../assets/img/logo-dual.svg'

const Navbar = () => {
	return (
		<NavbarStyled>
			<Link to='/'>
				<StyledSVG src={logoDual} />
			</Link>
			<SearchBar />
			<Link to='/admin/products'>
				Admin
			</Link>
		</NavbarStyled>
	)
}

export default Navbar
