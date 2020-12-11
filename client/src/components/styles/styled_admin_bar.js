import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { AdminBarLogic } from '../admin_page/admin_side_bar';

export const SideBarContainer = styled.div`
	position: relative;
	color: var(--clr-white);
	background-color: var(--clr-primary);
	width: ${props => props.pWidth}px;
	height: 100vh ;
	transition: 0.8s ease;
	transform: translatex(${props => props}px);
	transform: translatex(${props => props.value}px);
	
	`
export const ItemBox = styled.div`	
	color: var(--clr-white);
	flex-direction: column;
	padding: 0 auto;
	
	h1{
		margin: 0.5em 0.5em 0 0.5em;
	}
	h2{
		margin: 0.5em;
	}
`

export const SideBarButton = styled.button`
	position: absolute;
	right: 10px;
	background: transparent;    
	border: none;
	outline: 0;	
	
	&:active {
		transform: translateZ(180deg);
		}

	img {
		stroke: var(--clr-primary);
		height: 2em;
	}
`

export const StyledSVG = styled(SVG)`
	fill: red;
`