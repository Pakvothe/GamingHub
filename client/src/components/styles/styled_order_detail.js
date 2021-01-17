import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledOrderDetail = styled.div`
	.tables-container {
		display: flex;

		h2, h3 {
			margin-bottom: -1em;
		}

		& > div:first-child {
			flex: 1 0 30%;
			margin-right: 2em;
		}

		@media (max-width: 500px) {
			flex-direction: column;

			& > div:first-child {
				margin-right: 0;
				margin-bottom: 2em;
			}
		}
	}

`

export const StepOne = styled.div`
	display: flex;
	justify-content: space-between;

	.nomeimportanada {
		margin-bottom: 2em !important;
	}

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
			margin-top: 2em;
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

	@media (max-width: 1200px) {
		max-width: 800px;
		margin: 0 auto;
		flex-direction: column;

		& > div:first-child { margin-right: 0 }
		& > div:last-child { margin: 0 }
		aside { position: static }
	}
`

export const StepTwo = styled.div`
	display: flex;
	justify-content: space-evenly;
	
	.payment__container {
		margin: 1em 0;
		
		.select__container { 
			display: flex;
			align-items: center;
			
			button {
				margin: 0;
				visibility: hidden;

				&.btn-visible {
					visibility: visible;
				}
			}
			
			select {
				margin-right: 2em;
				margin-left: 0;
			}
			
			h5 {
				align-self: flex-start;
				margin-bottom: 1em;
			}
		}
	}

	.stepTwo__paragraph {
		text-align: center;
		span {
			display: block;
			text-align: center;
			font-weight: 700;
			font-size: 1.5em;
			margin: 0.5em 0 1em;
			color: var(--clr-primary);
			word-wrap: break-word;
		}
	}
	
	aside {
		border: 3px solid var(--clr-primary);
		border-radius: 0.5em;
		padding: 2em;
		margin-left: 3em;
		
		button {
			display: block;
			margin: 0 auto;
		}

		button:first-child {
			margin-bottom: 1em;
		}

		h3 {
			margin-bottom: 1.5em;
			text-align: center;
		}

	}

	@media (max-width: 800px) {
		flex-direction: column;
		text-align: center;

		label {
			max-width: 400px;
			width: auto;
			margin: 0 auto;
		}

		.payment__container {
			.select__container {
				flex-direction: column;

				select {
					margin-right: 0;
				}
	
				.btn {
					margin-top: 1em;
				}
			}
		} 

		aside {
			margin: 3em 0 0;
			border: 0;
			padding: 0;

			h3 {
				display: flex;
				justify-content: center;
				align-items: center;

				&::before {
					content: '';
					border-top: 1px solid rgba(0,0,0,0.2);
					flex: 1 1 auto;
				}

				&::after {
					content: '';
					border-top: 1px solid rgba(0,0,0,0.2);
					flex: 1 1 auto;
				}

				span {
					flex: 1;
					padding: 0 1em;
				}
			}
		}

		footer {
			border-top: 3px solid rgba(0,0,0,0.1);
		}
	}
`

export const StepThree = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly; 
	.step__info{
		text-align: center;
		p {
			font-size: 1.5em;
			line-height: 1.2em;
		}

		span {
			font-size: 1.5em;
			font-weight: 900;
			color: var(--clr-primary);
		}
	}
	.step__icon{
		font-size: 10em;
		color: var(--clr-primary-2);
		margin-bottom: 20px;
	}
`

export const GameClose = styled.button`
	position: absolute;
	cursor: pointer;
	top: 10px;
	right: 10px;
	border: none;
	width: 25px;
	height: 25px;
	background: transparent;

	svg {
		fill: var(--clr-primary);
		transition: fill .2s ease-in-out;
		width: 25px;
		height: 25px;
	}

	&:hover svg {
		fill: var(--clr-primary-2);
	}
`


export const StyledSVG = styled(SVG)``