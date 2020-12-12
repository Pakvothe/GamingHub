import React, { useEffect, useState } from "react";
import { SideBarContainer, SideBarButton, StyledSVG } from '../../styles/styled_admin_bar';

const AdminSideBar = () => {
	const [buttonToggle, setButtonToggle] = useState(true);

	const toggleMenu = () => {
		setButtonToggle((prev) => !prev)
	};

	return (
		<>
			<SideBarContainer className={buttonToggle && 'toggle'} >
				<h1>GameHub</h1>
				<SideBarButton onClick={() => toggleMenu()} className={buttonToggle && 'toggle'}>
					<StyledSVG src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4=" />
				</SideBarButton>
				<ul>
					<li><a href="#">Productos</a></li>
					<li><a href="#">Categorias</a></li>
					<li><a href="#">Ordenes</a></li>
					<li><a href="#">Usuarios</a></li>
				</ul>
			</SideBarContainer>
		</>
	);
};

export default AdminSideBar;