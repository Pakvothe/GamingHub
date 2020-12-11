import React, { useEffect, useState } from "react";
import { SideBarContainer, SideBarButton, ItemBox } from '../../styles/styled_admin_bar';

export const AdminBarLogic = ({ width, height }) => {
	const [xPosition, setX] = useState(-width);

	const toggleMenu = () => {
		if (xPosition < 0) {
			setX(0);
		} else {
			setX(-width);
		}
	};

	useEffect(() => {
		setX(0);
	}, []);

	return (
		<>
			<SideBarContainer value={xPosition} pWidth={width} pHeight={height}>
				<ItemBox >
					<h1>GameHub</h1>
					<SideBarButton onClick={() => toggleMenu()} pWidth={width}>
						<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4=" />
					</SideBarButton>
					<br />
					<h2>Productos</h2>
					<h2>Categorias</h2>
					<h2>Ordenes</h2>
					<h2>Usuarios</h2>
				</ItemBox>
			</SideBarContainer>
		</>
	);
};

AdminBarLogic.defaultProps = {
	width: 300,
	height: "100vh"
};