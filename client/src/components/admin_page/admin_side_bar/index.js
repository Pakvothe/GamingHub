import React, { useEffect, useState } from "react";
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

	const toggleMenu = () => {
		setButtonToggle((prev) => !prev)
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
				<SideBarButton onClick={() => toggleMenu()} className={buttonToggle && 'toggle'}>
					<StyledSVG src={arrowLeft} />
				</SideBarButton>
				<ul>
					<li><NavLink exact activeClassName="active" to="/admin">{strings[language].products}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/categories">{strings[language].categories}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/orders">{strings[language].orders}</NavLink></li>
					<li><NavLink activeClassName="active" to="/admin/users">{strings[language].users}</NavLink></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;