import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: var(--clr-dark);
	padding: 3em 0;
	text-align: center;
	color: var(--clr-white);
	margin-top: auto;

	a {
		color: var(--clr-primary);
		text-decoration: none;

		&:hover { color: var(--clr-primary-2) }
	}

	ul {
		display: flex;
		justify-content: center;
		margin: 2em 0;
		list-style: none;

		li { margin: 0 2em }

		a {
			color: currentColor;

			&:hover { color: var(--clr-primary) }
		}
	}

	p {
		max-width: 600px;
		margin: 0 auto;
		font-size: 0.8em;
		line-height: 2;
		color: var(--clr-middle);
	}

	svg { fill: var(--clr-white) }
`

export default StyledFooter;