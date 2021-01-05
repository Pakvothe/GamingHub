import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const SideBarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	color: var(--clr-white);
	background-color: var(--clr-primary);
	width: 300px;
	height: 100vh ;
	transition: 0.8s ease;
	transform: translatex(-250px);
	padding: 2em 0;
	z-index: 99;

	svg  { fill: currentColor }

	div { text-align: center; }
	
	.logo-link {
		color: currentColor;
		
		&:hover {
			color: var(--clr-dark);
		}
		
		svg {
			height: 1.5em;
		}
	}
	 
	&.toggle{
		transform: translatex(0px);
	}

	@media (max-width: 800px){
		width: 100vw;
		transform: translatex(0px);

		&.toggle{
			transform: translatex(calc(-100vw + 50px));
		}
	}

	ul {
		list-style: none;
		margin-top: 2em;
		
		a {
			display:block;
			color: currentColor;
			text-decoration: none;
			padding: 1em 2em;
			transition: background-color .25s ease, padding .25s ease;

			&:hover {
				background-color: var(--clr-primary-2);
				transition: none;
			}

			&.active {
				font-weight: 700;
				border-left: 5px solid var(--clr-primary-2);
				padding-left: 3em;
				transition: padding .25s ease;
			}
		}
	}
`

export const SideBarButton = styled.button`
	color: var(--clr-white);
	display:none;
	position: absolute;
	top: 1.2em;
	right: 0;
	background: transparent;    
	border: none;
	outline: 0;	
	transform: rotateZ(0);
	transition: transform .75s cubic-bezier(.25,.1,.75,1.5);
	cursor: pointer;

	svg {
		height: 50px;
		width: 50px;
	}
	
	&.toggle {
		transform: rotateZ(180deg);
		}

	@media screen and (max-width: 800px){
		display: inline;
	}
`

export const StyledSVG = styled(SVG)`
`