import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import { Dropdown } from '../styles/styled_global';
import SearchBar from '../search_bar';
import CartSideBar from '../cart_sidebar';

/* --- Actions --- */
import { emptyFilter, getFilterProducts } from '../../redux/actions/products_actions';
import { changeLanguage, toggleTheme } from './../../redux/actions/global_actions'

/* --- Logos --- */
import logoDual from '../../assets/img/logo-dual.svg'
import cart from '../../assets/img/cart.svg'
import moon from '../../assets/img/moon.svg'
import sun from '../../assets/img/sun.svg'
import languageIcon from '../../assets/img/language.svg'
import user from '../../assets/img/user.svg'

/* --- Strings --- */
import strings from './strings'

const Navbar = ({ toggleModal }) => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const categories = useSelector(state => state.categoriesReducer.categories.list);
	const theme = useSelector(state => state.globalReducer.theme)


	const handleClick = (ev) => {
		dispatch(changeLanguage(ev.target.id))
	}

	const handleCategories = (ev) => {
		if (ev.target.id === 'todos') {
			return dispatch(emptyFilter())
		}
		dispatch(getFilterProducts(ev.target.id));
	}

	const handleTheme = () => {
		dispatch(toggleTheme())
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
										<a id="en" className={language === 'en' ? 'selected' : null}>
											{strings[language].language_en}
										</a> </li>
									<li>
										<a id="es" className={language === 'es' ? 'selected' : null}>
											{strings[language].language_es}
										</a>
									</li>
								</ul>
							</Dropdown>
							<Dropdown>
								<StyledSVG src={user} />
								<span>{strings[language].user}</span>
								<ul>
									<li className="dropdown__first-name"><p>Emiliano</p></li>
									<li><Link to="/user">Perfil</Link></li>
									<li><Link>Item 2</Link></li>
									<li><Link to="/admin">Panel de Administración</Link></li>
								</ul>
							</Dropdown>
							<li>
								<button onClick={toggleModal}>
									<StyledSVG src={cart} />
									<span>{strings[language].cart}</span>
								</button>
							</li>
							<li>
								<button onClick={handleTheme}>
									<StyledSVG src={theme === 'light' ? sun : moon} />
									<span>Tema</span>
								</button>
							</li>
						</ul>
					</div>

					<div className="navbar__bottom">
						<ul className="navbar-bottom__menu">
							<Dropdown>
								<span >{strings[language].categories}</span>
								<ul className="dropdown-columns" onClick={(e) => handleCategories(e)}>
									<li><HashLink id="todos" to="#catalog">TODOS</HashLink></li>
									{!!categories.length && categories.map(category => (
										<li key={category.id}>
											<HashLink
												id={category[`name_${language}`]}
												to="/#catalog"
												scroll={(el) => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
											>
												{category[`name_${language}`].toUpperCase()}
											</HashLink>
										</li>
									))}
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