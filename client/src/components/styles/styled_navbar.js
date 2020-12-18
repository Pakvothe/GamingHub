import styled from 'styled-components';
import SVG from 'react-inlinesvg';


export const NavbarStyled = styled.nav`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	padding: 1.5rem 200px;
	background-color: var(--clr-dark);
	color:var(--clr-white);
	svg {
		fill: currentColor;
	}

	form {
		margin: 0 40px;
		min-width: 400px;
	}

	.navbar__logo{
		justify-self:start;	
	}

	a {
		display: inline-block;
		color: inherit;
		text-decoration: none;
		
		&:hover { color: var(--clr-primary); }
	}

	li {
		list-style: none;
		list-style: none;

		.dropdown {
			position: relative;
			display: inline-block;
			cursor: pointer;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			background-color: var(--clr-white);
			box-shadow: 2px 2px 5px 0px var(--clr-dark);
			border-radius: 1rem;
			min-width: 160px;
			z-index: 1;
			overflow: hidden;
		}

		.dropdown-content span {
			color: black;
			padding: 12px 16px;
			display: block;
		}

		.dropdown-content span:hover { background-color: #ccc }

		.dropdown:hover .dropdown-content { display: block; }
	}

	.navbar__options{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		li {
			display: block;
			text-align:center;
			margin: 0 1.5em;
			span{
				display: block;
			}
		}
	}

	.navbar__menu{
		grid-column: span 3;
		place-items: center;
		li {
			display: inline-block;
		}
	}

	.navbar__menu li{
		padding: 0 1.5em;
	}

	.hover_text:hover{
		color: var(--clr-primary);
		fill: var(--clr-primary);
	}

	@media screen and (max-width: 600px) {

		a { margin-left: 0; }

		form {
			flex-basis: 0;
			margin: 2em 0;
		}
	}
`

export const StyledSVG = styled(SVG)`
`