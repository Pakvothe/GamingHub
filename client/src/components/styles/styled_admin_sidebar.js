import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const SideBarContainer = styled.div`
	display: inline-block;
	position: relative;
	color: var(--clr-white);
	background-color: var(--clr-primary);
	width: 300px;
	height: 100vh ;
	transition: 0.8s ease;
	transform: translatex(-250px);
	padding: 2em 0;

	h1{
		font-weight: 400;
		text-transform: uppercase;
		margin-left: 2rem;
		span{
			font-weight: 900;
		}
		a{
			text-decoration: none;
			color:inherit;
			&:hover {
				color: var(--clr-dark);
			}
		}
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
	display:none;
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

	@media screen and (max-width: 500px){
		display: inline;
	}
`

export const StyledSVG = styled(SVG)`
	fill: var(--clr-white);
	height: 2em;
`