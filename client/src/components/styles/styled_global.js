import styled from 'styled-components';

export const Btn = styled.button`
	font-weight: 900;
	border: 3px solid;
	border-radius: 10em;
	padding: .7em 1.2em;
	transition: transform 25ms ease, box-shadow 25ms ease;
	min-width: 175px;

	&:active {
		transform: translate(2px, 2px);
		outline: 0;
		box-shadow: none !important;
	}

	&.btn-ppal {
		color: var(--clr-white);
		background-color: var(--clr-primary);
		border-color: var(--clr-primary);
		box-shadow: 2px 2px 0px rgba(0,0,0,.15);
	}

	&.btn-ppal:hover {
		background-image: linear-gradient(45deg, var(--clr-primary), var(--clr-secondary));
	}

	&.btn-sec {
		color: var(--clr-primary);
		background-color: var(--clr-white);
		border-color: var(--clr-primary);
		box-shadow: 2px 2px 0px var(--clr-primary);
	}

	&.btn-sec:hover {
		color: var(--clr-white);
		background-color: var(--clr-primary);
	}

	&.btn-img {
		position: relative;
		padding-right: 4em;
	}

	&.btn-img svg {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		width: 25px;
		height: 25px;
		fill: currentColor;
	}
`

