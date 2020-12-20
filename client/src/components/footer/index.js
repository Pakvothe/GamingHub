import React from 'react';
import { Link } from 'react-router-dom';
import StyledFooter from '../styles/styled_footer';
import { StyledSVG } from '../styles/styled_global';
import logo from '../../assets/img/logo-dual.svg'

const Footer = () => {
	return (
		<StyledFooter>
			<StyledSVG src={logo} />

			<nav>
				<ul>
					<li><Link to="">Términos y condiciones</Link></li>
					<li><Link to="">Privacidad</Link></li>
					<li><Link to="">Legal</Link></li>
					<li><Link to="">Contacto</Link></li>
				</ul>
			</nav>

			<p>
				Lorem ipsum dolor, <a href="#">este es un enlace</a> sit amet consectetur adipisicing elit. Sed adipisci magni aliquam sit repellat facilis. Ut labore, eos sint ex maiores quos voluptatum necessitatibus. Tenetur.
			</p>
		</StyledFooter>
	)
}

export default Footer;