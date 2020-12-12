import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { AdminBarLogic } from '../admin_page/admin_side_bar';

export const SideBarContainer = styled.div`
	position: relative;
	color: var(--clr-white);
	background-color: var(--clr-primary);
	width: 300px;
	height: 100vh ;
	transition: 0.8s ease;
	transform: translatex(-250px);
	padding: 2em 0;

	h1{
		margin-left: 2rem;
	}
	 
	&.toggle{
		transform: translatex(0px);
	}
	@media (max-width: 500px){
		width: 100vw;
		transform: translatex(0px);
		&.toggle{
		transform: translatex(calc(-100vw + 50px));
		}
	}

	ul {
		list-style: none;
		margin-top: 2em;
		
		a{
			display:block;
			color: currentColor;
			text-decoration: none;
			padding: 1em 2em;
			transition: background-color .258910s ease;

			&:hover{
				background-color: var(--clr-primary-2);
				transition: none;
			}
		}
	}
`

export const SideBarButton = styled.button`
	position: absolute;
	top: 2.6em;
	right: 13px;
	background: transparent;    
	border: none;
	outline: 0;	
	transform: rotateZ(0);
	transition: transform .75s cubic-bezier(.25,.1,.75,1.5);
	
	&.toggle {
		transform: rotateZ(180deg);
		}

`

export const StyledSVG = styled(SVG)`
	fill: var(--clr-white);
	height: 2em;
`