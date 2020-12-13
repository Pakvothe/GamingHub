import styled from 'styled-components';

const NavbarStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 2rem;
	background-color: var(--clr-dark);
	color:var(--clr-white);

	h1 {
		color:inherit;
		text-transform: uppercase;
		font-weight: 400;

		span {
			color:var(--clr-primary);
			font-weight: 900;
		}
	}

	form {
		margin: 0 40px;
		flex-basis: 400px;
		flex-shrink: 1;
	}

	a {
		display: inline-block;
		color: inherit;
		text-decoration: none;

		&:hover { color: var(--clr-primary); }
	}

	@media screen and (max-width: 600px) {
		flex-direction: column;

		a { margin-left: 0; }

		form {
			flex-basis: 0;
			margin: 2em 0;
		}
	}
`

export default NavbarStyled;