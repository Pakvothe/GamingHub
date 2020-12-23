import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StepOne = styled.div`
	display: flex;
	justify-content: space-between;

	& > div:first-child {
		margin-right: 4em;
		flex: 1;
	}

	& > div:last-child {
		flex-grow: 0;
		flex-basis: 500px;
		position: relative;
		margin: 0 auto;
	}

	aside {
		border: 3px solid var(--clr-primary);
		border-radius: 0.5em;
		padding: 2em;
		position: sticky;
		top: 3em;
		right: 0;

		label {
			width: 100%;
			margin-bottom: 1.5em;
		}

		h3 {
			margin-bottom: 1.5em;
			text-align: center;
		}

		.aside__total,
		.aside__subtotal,
		.aside__discount {
			display: flex;
			justify-content: space-between;

			p:last-child {
				font-weight: 900;
			}
		}

		.aside__subtotal {
			margin-bottom: 0.5em;
		}

		.aside__total {
			font-size: 1.5em;
			margin-bottom: 1em;
		}

		hr {
			margin: 2em 0;
			height: 1px;
			border: none;
			background: #CCC;
		}

		button {
			display: block;
			margin: 0 auto;
		}
	}
`

export const StepTwo = styled.div`

	.button__container {
		button {
			margin: 2em auto 0;
			display: block;
		}
	}
	
	aside {
		border: 3px solid var(--clr-primary);
		border-radius: 0.5em;
		padding: 2em;
		position: sticky;
		top: 3em;
		right: 0;

		label {
			width: 100%;
			margin-bottom: 1.5em;
		}

		h3 {
			margin-bottom: 1.5em;
			text-align: center;
		}

		.aside__total,
		.aside__subtotal,
		.aside__discount {
			display: flex;
			justify-content: space-between;

			p:last-child {
				font-weight: 900;
			}
		}

		.aside__subtotal {
			margin-bottom: 0.5em;
		}

		.aside__total {
			font-size: 1.5em;
			margin-bottom: 1em;
		}

		hr {
			margin: 2em 0;
			height: 1px;
			border: none;
			background: #CCC;
		}

		button {
			display: block;
			margin: 0 auto;
		}
	}
`

export const StyledSVG = styled(SVG)``