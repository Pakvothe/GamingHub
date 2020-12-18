import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledSidebarCart = styled.div`
	.modal {
	position: fixed;
	right: 0;
	top: 0;
	height: 100vh;
	width: 500px;
	padding: 4em 2em;
	z-index: 990;
	background: var(--clr-white);
	overflow: auto;
	color: var(--clr-dark);
	box-shadow: 0 0 50px rgba(0,0,0,0.7);

	.modal__title{
		color: var(--clr-primary);
		margin: 1em;
	}

	hr {
		height: 1px;
		margin: 3em auto;
		border: none;
		background: #CCC;
	}

	.modal__subtotal {
		display: flex;
		justify-content: space-between;
		font-size: 1.5em;
		text-transform: uppercase;
		margin-bottom: 2em;

		p:last-of-type {
			font-weight: 900;
		}
	}
}
	.modal__close{
		position: absolute;
		top: 2em;
		left: 2em;
		height: 40px;
		width: 40px;
		border: none;
		background: none;

		&:hover {
			svg{
				fill: var(--clr-dark);
			}
		}
		&:focus {
			outline: none;
			color: var(--clr-dark);
		}

		&:active{
			transform: scale(0.9);
		}
	}
		
`

export const StyledCloseBtn = styled(SVG)`
	width: 40px;
	height: 40px;
	fill: #999;  
`