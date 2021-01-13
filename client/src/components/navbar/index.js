import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar';
import { Dropdown } from '../styles/styled_global';
import SearchBar from '../search_bar';
import Swal from 'sweetalert2';

/* --- Actions --- */
import { emptyFilter, getFilterProducts, getProducts } from '../../redux/actions/products_actions';
import { changeLanguage, resetCurrentPage, toggleTheme, openLogin } from './../../redux/actions/global_actions'
import { logout } from './../../redux/actions/users_actions'

/* --- Logos --- */
import logoDual from '../../assets/img/logo-dual.svg'
import cart from '../../assets/img/cart.svg'
import moon from '../../assets/img/moon.svg'
import sun from '../../assets/img/sun.svg'
import languageIcon from '../../assets/img/language.svg'
import userPic from '../../assets/img/user.svg'

/* --- Strings --- */
import strings from './strings'

/* --- Products Payload --- */
import { getProductsPayload } from './../home_page/index';
import swals from '../../utils/swals';

const Navbar = ({ toggleModal, cartNumber }) => {

	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const categories = useSelector(state => state.categoriesReducer.categories.list);
	const user = useSelector(state => state.usersReducer.user.info);
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

	const handleLogout = () => {
		swals.FIRE('warning',
			s.logout_confirm,
			s.logout_confirm_text,
			s.logout_button,
			true,
			s.logout_cancel_button_text)
			.then((result) => {
				if (result.isConfirmed) {
					swals.CONFIRMOK(
						s.logout_confirm_text_2,
						'',
						'success',
						dispatch(logout())
					)
				}
			})
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
								<span>{s.language}</span>
								<ul onClick={(e) => handleClick(e)}>
									<li>
										<button id='en' className="dropdown__button">
											English
										</button> </li>
									<li>
										<button id='es' className="dropdown__button">
											Español
										</button>
									</li>
								</ul>
							</Dropdown>
							<Dropdown>
								{
									user.first_name // Para poder hacer la compbrobación de que esté logueado y después la comprobación de que tenga foto de perfil abajo
										? (<div className="navbar__profile-pic"><img src={user.profile_pic || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} alt="Imagen de perfil" /></div>)
										: <StyledSVG src={userPic} />
								}
								<span>{s.user}</span>
								<ul>
									{
										user.first_name ? (
											<>
												<li className='dropdown__first-name'><p>{user.first_name}</p></li>
												<li><Link to='/user'>{s.profile}</Link></li>
												{user.is_admin && <li><Link to='/admin'>{s.admin}</Link></li>}
												<li><Link to="/" onClick={handleLogout}>{s.logout}</Link></li>
											</>
										) : (
												<>
													<li>
														<button
															className="dropdown__button"
															onClick={openLoginModal}>
															{s.login}
														</button>
													</li>
													<li><Link
														to="/signup"
														className="dropdown__button">
														{s.signup}
													</Link>
													</li>
												</>
											)
									}
								</ul>
							</Dropdown>
							<li>
								<button onClick={toggleModal}>
									<StyledSVG src={cart} />
									<span>{s.cart}</span>
									{!!number && <span className='cart__number'>{
										number >= 100 ? '99+' : number
									}</span>}
								</button>
							</li>
							<li>
								<button onClick={handleTheme}>
									<StyledSVG src={theme === 'light' ? sun : moon} />
									<span>{s.theme}</span>
								</button>
							</li>
						</ul>
					</div>

					<div className='navbar__bottom'>
						<ul className='navbar-bottom__menu'>
							<Dropdown>
								<span >{s.categories}</span>
								<ul className='dropdown-columns' onClick={(e) => handleCategories(e)}>
									<li><HashLink id='todos' to='#catalog'>TODOS</HashLink></li>
									{!!categories.length && categories.map(category => (
										<li key={category.id}>
											<HashLink
												id={category[`name_${language}`]}
												to='/#catalog'
												scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
											>
												{category[`name_${language}`].toUpperCase()}
											</HashLink>
										</li>
									))}
								</ul>
							</Dropdown>
							<li>
								<Link to='/'>{s.offer}</Link>
							</li>
							<li>
								<Link to='/about'>{s.about}</Link>
							</li>
						</ul>
					</div>
				</div>
			</NavbarStyled>
		</>
	)
}

export default Navbar;