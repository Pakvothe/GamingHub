import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SideBarContainer, SideBarButton, StyledSVG } from '../../styles/styled_admin_sidebar';

const AdminSideBar = () => {
	const [buttonToggle, setButtonToggle] = useState(true);

	const toggleMenu = () => {
		setButtonToggle((prev) => !prev)
	};

	return (
		<>
			<SideBarContainer className={buttonToggle && 'toggle'} >
				<h1><Link to="/">Game<span>Hub</span></Link></h1>
				<SideBarButton onClick={() => toggleMenu()} className={buttonToggle && 'toggle'}>
					<StyledSVG src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4=" />
				</SideBarButton>
				<ul>
					<li><Link to="/admin/products">Productos</Link></li>
					<li><Link to="/admin/categories">Categorias</Link></li>
					<li><Link to="#">Ordenes</Link></li>
					<li><Link to="#">Usuarios</Link></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;