import styled from 'styled-components';

export const PaginationStyled = styled.nav`
	display:flex;
	justify-content: center;
	align-items:center;
	margin: 1.5em 0;
	line-height: 1;

	ul {
		font-family: Poppins, Raleway, Arial;
		font-weight: 900;
		font-size: 1.2em;
		display: flex;
		align-items: center;
		margin-top: 2em;
	}

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0.5em;
		cursor: pointer;
		list-style: none;
		width: 2.5em;
		height: 2.5em;
		border-radius: 99em;
		border: 2px solid transparent;

		&:hover{
			border-color: var(--clr-primary);
		}
	}

	li:focus{
		outline: none;
	}

	.controls{
		padding: .2em;
		border: none;
		border-radius: 99em;

		svg {
			fill: var(--clr-primary-2);
			width: 3em;
			height: 3em;
		}

		&:hover{
			svg {
			fill: var(--clr-primary);
			}
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
		cursor: default;

		svg {
			fill: var(--clr-dark);
			width: 3em;
			height: 3em;
		}
		&:hover{
			svg {
			fill: var(--clr-dark);
			}
		}
	}
`