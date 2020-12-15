import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SideBarContainer, SideBarButton, StyledSVG } from '../../styles/styled_admin_sidebar';
import logo from '../../../assets/img/logo.svg'
import arrowLeft from '../../../assets/img/arrow-left.svg'

const AdminSideBar = () => {
	const [buttonToggle, setButtonToggle] = useState(true);

	const toggleMenu = () => {
		setButtonToggle((prev) => !prev)
	};

	return (
		<>
			<SideBarContainer className={buttonToggle && 'toggle'}>
				<div>
					<Link to="/" className="logo-link">
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
					<li><Link to="/admin/user">Usuarios</Link></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;