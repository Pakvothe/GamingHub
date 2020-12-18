import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import { Dropdown } from '../styles/styled_global';
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
import { emptyFilter } from '../../redux/actions/products_actions';
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
				<div className="wrapper">
					<div className="navbar__top">
						<div className="navbar__logo">
							<Link to='/' onClick={() => dispatch(emptyFilter())}>
								<StyledSVG src={logoDual} />
							</Link>

						</div>
						<SearchBar language={language} />
						<ul className="navbar__options">
							<Dropdown>
								<StyledSVG src={languageIcon} />
								<span>{strings[language].language}</span>
								<ul onClick={(e) => handleClick(e)}>
									<li>
										<Link id="en" className={language === 'en' ? 'selected' : null}>
											{strings[language].language_en}
										</Link> </li>
									<li>
										<Link id="es" className={language === 'es' ? 'selected' : null}>
											{strings[language].language_es}
										</Link>
									</li>
								</ul>
							</Dropdown>
							<Dropdown>
								<Link to='/admin'>
									<StyledSVG src={user} />
								</Link>
								<span>{strings[language].user}</span>
								<ul>
									<li className="dropdown__first-name"><p>Emiliano</p></li>
									<li><Link>Item 1</Link></li>
									<li><Link>Item 2</Link></li>
									<li><Link>Item 3</Link></li>
								</ul>
							</Dropdown>
							<li>
								<button className="hover_text" onClick={toggleModal}>
									<StyledSVG src={cart} />
									<span>{strings[language].cart}</span>
								</button>
								<CartSideBar language={language} show={showBar} closeCallback={toggleModal} />
							</li>
						</ul>
					</div>

					<div className="navbar__bottom">
						<ul className="navbar-bottom__menu">
							<Dropdown>
								<span className="hover_text">{strings[language].categories}</span>
								<ul>
									<li>Todos</li>
									<li>Accion</li>
									<li>Aventura</li>
								</ul>
							</Dropdown>
							<li>
								<Link to='/'>{strings[language].offer}</Link>
							</li>
							<li>
								<Link to='/'>{strings[language].about}</Link>
							</li>
						</ul>
					</div>
				</div>
			</NavbarStyled >
		</>
	)
}

export default Navbar;