import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../search_bar';
import { Link } from 'react-router-dom';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';

/* --- Logos --- */
import logoDual from '../../assets/img/logo-dual.svg'
import cart from '../../assets/img/cart.svg'
import languageIcon from '../../assets/img/language.svg'
import user from '../../assets/img/user.svg'
import { changeLanguage } from './../../redux/actions/global_actions'

/* --- Strings --- */
import strings from './strings'
const Navbar = () => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);

	const handleClick = (e) => {
		dispatch(changeLanguage(e.target.id))
	}

	return (
		<>
			<NavbarStyled>
				<Link to='/'>
					<StyledSVG src={logoDual} />
				</Link>
				<SearchBar />
				<ul className="navbar__options">
					<li>
						<div className='dropdown'>
							<StyledSVG src={languageIcon} />
							<span >{strings[language].language}</span>
							<div className="dropdown-content" onClick={(e) => handleClick(e)}>
								<span id="en" className={language === 'en' ? 'selected' : null}>{strings[language].language_en}</span>
								<span id="es" className={language === 'es' ? 'selected' : null}>{strings[language].language_es}</span>
							</div>
						</div>
					</li>
					<li>
						<Link to='/admin'>
							<StyledSVG src={user} />
							<span>{strings[language].user}</span>
						</Link>
					</li>
					<li>
						<Link to='/admin'>
							<StyledSVG src={cart} />
							<span>{strings[language].cart}</span>
						</Link>
					</li>
				</ul>
			</NavbarStyled>
			<NavbarStyled>
				<ul className="navbar__menu">
					<li>
						<div className='dropdown'>
							<span>{strings[language].categories}</span>
							<div className="dropdown-content">
								<span>Todos</span>
								<span>Accion</span>
								<span>Aventura</span>
							</div>
						</div>
					</li>
					<li>
						<Link to='/'>{strings[language].offer}</Link>
					</li>
					<li>
						<Link to='/'>{strings[language].about}</Link>
					</li>
				</ul>
			</NavbarStyled>
		</>
	)
}

export default Navbar
