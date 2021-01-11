import styled from 'styled-components';
import SVG from 'react-inlinesvg';


export const NavbarStyled = styled.nav`
	background: var(--clr-dark);
	padding: 2em 0;
	color: var(--clr-white);

	a {
		text-decoration: none;
		color: currentColor;
		font-weight: 500;

		&:hover {
			color: var(--clr-primary);
		}
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

			.navbar__profile-pic {
				width: 40px;
				height: 40px;
				border: 3px solid var(--clr-white);
				border-radius: 50%;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			& > li {
				position: relative;
				cursor: pointer;
			}

			& > li + li { margin-left: 3em; }

			li, li > button {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}

			li:hover {
				color: var(--clr-primary);

				.navbar__profile-pic {
					border-color: var(--clr-primary);
				}
			
			}

			.cart__number {
				font-size: 0.8em;
				background: var(--clr-primary);
				line-height: 1;
				padding: .3em .5em;
				border-radius: 99em;
				position: absolute;
				top: -5px;
				right: -5px;
			}
			li:hover .cart__number { color: var(--clr-white) }

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
	@media (max-width: 1000px){
		.navbar__top{
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 0;
			form {
				flex-basis: 0;
			}
			.navbar__logo{
				margin-bottom: 2em;
				flex-basis: 0;
			}
			.navbar__options{
				flex-basis: 0;
				margin: 2em 0 0;
			}
		}
		.navbar__bottom{
			display: none;
		}
	}
`

export const StyledSVG = styled(SVG)`
`