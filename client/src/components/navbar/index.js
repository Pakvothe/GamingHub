import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import SearchBar from '../search_bar';
import CartSideBar from '../cart_sidebar';

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

	//cart modal ->
	const [showBar, setShowBar] = useState(false);
	const toggleModal = () => {
		setShowBar(!showBar)
	}
	// <-

	const handleClick = (e) => {
		dispatch(changeLanguage(e.target.id))
	}

	return (
		<>
			<NavbarStyled>
				<Link to='/'>
					<StyledSVG src={logoDual} />
				</Link>
				<SearchBar language={language} />
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
						<span onClick={toggleModal} style={{ cursor: 'pointer' }}>
							<StyledSVG src={cart} />
							<span>{strings[language].cart}</span>
						</span>
						<CartSideBar language={language} show={showBar} closeCallback={toggleModal} />
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
