import styled from 'styled-components';
import SVG from 'react-inlinesvg';


export const NavbarStyled = styled.nav`
	background: var(--clr-dark);
	padding: 2em 0;
	color: var(--clr-white);

	a {
		text-decoration: none;
		color: currentColor;

		&:hover { color: var(--clr-primary) }
	}

	svg  { fill: currentColor; }
	
	.navbar__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2em;

		.navbar__logo {
			color: var(--clr-white);
			flex-basis: 300px;
		}
		
		form {
			flex-basis: 400px;
		}

		.navbar__options {
			list-style: none;
			display: flex;
			align-items: center;
			flex-basis: 300px;

			& > li + li { margin-left: 3em; }

			li, li > button {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			li:hover { color: var(--clr-primary); }

			button {
				background: none;
				border: none;
				color: inherit;
				font: inherit;
			}
		}
	}


	.navbar__bottom {

		.navbar-bottom__menu {
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			color: currentColor;
			cursor: default;

			& > li + li { margin-left: 3em; }
		}
	}
`

export const StyledSVG = styled(SVG)`
`