import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { SideBarContainer, SideBarButton, StyledSVG } from '../../styles/styled_admin_sidebar';
import logo from '../../../assets/img/logo.svg'
import arrowLeft from '../../../assets/img/arrow-left.svg'
import strings from './strings';

import { emptyFilter, getProducts } from "../../../redux/actions/products_actions";
import { useDispatch, useSelector } from "react-redux";

const AdminSideBar = () => {
	const [buttonToggle, setButtonToggle] = useState(true);
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];

	const toggleMenu = () => {
		if (window.innerWidth <= 800) {
			setButtonToggle((prev) => !prev)
		}
	};

	return (
		<>
			<SideBarContainer className={buttonToggle && 'toggle'}>
				<div>
					<Link to="/" className="logo-link" onClick={() => {
						dispatch(emptyFilter())
						dispatch(getProducts({ name: 'stock', order: 'DESC', limit: 8 }))
					}}>
						<StyledSVG src={logo} />
					</Link>
				</div>
				<SideBarButton onClick={toggleMenu} className={buttonToggle && 'toggle'}>
					<StyledSVG src={arrowLeft} />
				</SideBarButton>
				<ul onClick={toggleMenu}>
					<li><NavLink exact activeClassName="active" to="/admin/">{s.charts}</NavLink></li>
					<li><NavLink exact activeClassName="active" to="/admin/products">{s.products}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/categories">{s.categories}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/orders">{s.orders}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/users">{s.users}</NavLink></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;