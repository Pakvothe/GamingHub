import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import { Dropdown } from '../styles/styled_global';
import SearchBar from '../search_bar';


/* --- Actions --- */
import { emptyFilter, getFilterProducts, getProducts } from '../../redux/actions/products_actions';
import { changeLanguage, resetCurrentPage, toggleTheme, openLogin } from './../../redux/actions/global_actions'

/* --- Logos --- */
import logoDual from '../../assets/img/logo-dual.svg'
import cart from '../../assets/img/cart.svg'
import moon from '../../assets/img/moon.svg'
import sun from '../../assets/img/sun.svg'
import languageIcon from '../../assets/img/language.svg'
import user from '../../assets/img/user.svg'

/* --- Strings --- */
import strings from './strings'

/* --- Products Payload --- */
import { getProductsPayload } from './../home_page/index';

const Navbar = ({ toggleModal, cartNumber }) => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const categories = useSelector(state => state.categoriesReducer.categories.list);
	const theme = useSelector(state => state.globalReducer.theme)

	const number = cartNumber.reduce((acc, prod) => {
		acc = acc + prod.quantity
		return acc;
	}, 0)

	const handleClick = (ev) => {
		if (ev.target.id) {
			dispatch(changeLanguage(ev.target.id))
		}
	}

	const handleCategories = (ev) => {
		dispatch(resetCurrentPage())
		if (ev.target.id === 'todos') {
			dispatch(getProducts(getProductsPayload))
			return dispatch(emptyFilter())
		}
		dispatch(getFilterProducts(ev.target.id));
	}

	const handleTheme = () => {
		dispatch(toggleTheme())
	}

	const openLoginModal = () => {
		dispatch(openLogin(true))
	}

	return (
		<>
			<NavbarStyled>
				<div className='wrapper'>
					<div className='navbar__top'>
						<div className='navbar__logo'>
							<Link to='/' onClick={() => {
								dispatch(emptyFilter())
								dispatch(getProducts(getProductsPayload))
								dispatch(resetCurrentPage())
							}}>
								<StyledSVG src={logoDual} />
							</Link>

						</div>
						<SearchBar language={language} />
						<ul className='navbar__options'>
							<Dropdown>
								<StyledSVG src={languageIcon} />
								<span>{strings[language].language}</span>
								<ul onClick={(e) => handleClick(e)}>
									<li>
										<a id='en' className={language === 'en' ? 'selected' : null}>
											{strings[language].language_en}
										</a> </li>
									<li>
										<a id='es' className={language === 'es' ? 'selected' : null}>
											{strings[language].language_es}
										</a>
									</li>
								</ul>
							</Dropdown>
							<Dropdown>
								<StyledSVG src={user} />
								<span>{strings[language].user}</span>
								<ul>
									<li className='dropdown__first-name'><p>Emiliano</p></li>

									<li><Link to='/user'>Perfil</Link></li>
									<li><Link to='/signup'>Registrarse</Link></li>
									<li><Link to='/admin'>Panel de Administración</Link></li>
									<li><Link onClick={openLoginModal}>Login</Link></li>
								</ul>
							</Dropdown>
							<li>
								<button onClick={toggleModal}>
									<StyledSVG src={cart} />
									<span>{strings[language].cart}</span>
									{!!number && <span className='cart__number'>{
										number >= 100 ? '99+' : number
									}</span>}
								</button>
							</li>
							<li>
								<button onClick={handleTheme}>
									<StyledSVG src={theme === 'light' ? sun : moon} />
									<span>{strings[language].theme}</span>
								</button>
							</li>
						</ul>
					</div>

					<div className='navbar__bottom'>
						<ul className='navbar-bottom__menu'>
							<Dropdown>
								<span >{strings[language].categories}</span>
								<ul className='dropdown-columns' onClick={(e) => handleCategories(e)}>
									<li><HashLink id='todos' to='#catalog'>TODOS</HashLink></li>
									{!!categories.length && categories.map(category => (
										<li key={category.id}>
											<HashLink
												id={category[`name_${language}`]}
												to='/#catalog'
												scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
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
			</NavbarStyled>
		</>
	)
}

export default Navbar;