import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter from '../styles/styled_footer';
import { StyledSVG } from '../styles/styled_global';
import logo from '../../assets/img/logo-dual.svg';
import strings from './strings';

const Footer = ({ language }) => {
	const s = strings[language];

	return (
		<StyledFooter>
			<StyledSVG src={logo} />
			<nav className="navbar__top">
				<ul>
					<li><Link to="/categories">{s.categories}</Link></li>
					<li><Link to="">{s.offers}</Link></li>
				</ul>
			</nav>

			<nav className="navbar__bottom">
				<ul>
					<li><Link to="">{s.terms}</Link></li>
					<li><Link to="">{s.privacy}</Link></li>
					<li><Link to="">{s.legal}</Link></li>
					<li><Link to="">{s.contact}</Link></li>
				</ul>
			</nav>

			<p>
				Lorem ipsum dolor, <a href="#">este es un enlace</a> sit amet consectetur adipisicing elit. Sed adipisci magni aliquam sit repellat facilis. Ut labore, eos sint ex maiores quos voluptatum necessitatibus. Tenetur.
			</p>
		</StyledFooter>
	)
}

export default Footer;