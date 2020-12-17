import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SideBarContainer, SideBarButton, StyledSVG } from '../../styles/styled_admin_sidebar';
import logo from '../../../assets/img/logo.svg'
import arrowLeft from '../../../assets/img/arrow-left.svg'

import { emptyFilter, getProducts } from "../../../redux/actions/products_actions";
import { useDispatch } from "react-redux";

const AdminSideBar = () => {
	const [buttonToggle, setButtonToggle] = useState(true);
	const dispatch = useDispatch();

	const toggleMenu = () => {
		setButtonToggle((prev) => !prev)
	};

	return (
		<>
			<SideBarContainer className={buttonToggle && 'toggle'}>
				<div>
					<Link to="/" className="logo-link" onClick={() => {
						dispatch(emptyFilter())
						dispatch(getProducts())
					}}>
						<StyledSVG src={logo} />
					</Link>
				</div>
				<SideBarButton onClick={() => toggleMenu()} className={buttonToggle && 'toggle'}>
					<StyledSVG src={arrowLeft} />
				</SideBarButton>
				<ul>
					<li><Link to="/admin">Productos</Link></li>
					<li><Link to="/admin/categories">Categorias</Link></li>
					<li><Link to="/admin/orders">Ordenes</Link></li>
					<li><Link to="/admin/users">Usuarios</Link></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;