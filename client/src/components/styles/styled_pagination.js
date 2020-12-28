import styled from 'styled-components';

export const PaginationStyled = styled.nav`
	display:flex;
	justify-content: center;
	align-items:center;
	margin: 1.5em 0;

	ul {
		display: inline-block;
		padding-left: 15px;
		padding-right: 15px;
	}

	li {
		display: inline-block;
		margin: 0 1em;
		cursor: pointer;
	}

	li:focus{
		outline: none;
	}

	.controls{
		padding: .5em;
		background: var(--clr-primary-2);
		color: var(--clr-white);
		z-index: 80;
		transition: opacity .2s ease;
		border-radius: 2em;

		svg {
			fill: var(--clr-white);
			width: 30px;
			height: 30px;
		}
	}

	.active{
		padding: .5em;
		background: var(--clr-primary);
		color: var(--clr-white);
		z-index: 80;
		transition: opacity .2s ease;
		border-radius: 2em;
	}
	.disabled{
		padding: .5em;
		background: var(--clr-dark);
		color: var(--clr-white);
		z-index: 80;
		transition: opacity .2s ease;
		border-radius: 2em;
		cursor: disabled;
	}
`