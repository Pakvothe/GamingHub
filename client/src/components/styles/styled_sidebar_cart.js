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
		margin-bottom: 1em;
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

	article {
		position: relative;
		display: flex;
		border: 2px solid var(--clr-primary);
		border-radius: 0.5em;
		margin-bottom: 1em;
		align-items: center;
		justify-content: flex-start;
		background: var(--clr-white);
		padding: 1em;

		&:hover {
			border: 2px solid var(--clr-primary-2);
		}
		.article__img{
			height: 100px;
			flex: 0 0 150px;
			margin-right: 1em;
			border-radius: 10px;
			overflow: hidden;
		}

		.article__info{
			text-align: left;

			.article__name{
				font-size: 1.2em;
				font-weight: 900;
			}
		}
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
				color: var(--clr-dark);
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
		
	.delete__product {
	position: absolute;
	right: 10px;
	top: 10px;
	background: none;
	border: none;
	width: 25px;
	height: 25px;
	transition: opacity 0.4s ease;

	&:hover svg {
		color: var(--clr-primary-2);
	}

	&:focus {
		outline: none;
	}
	&:active{
		transform: translateY(1px);
	}
}
`
export const StyledSVG = styled(SVG)`
	width: 25px;
	height: 25px;
	color: var(--clr-primary);
`

export const StyledCloseBtn = styled(SVG)`
	width: 40px;
	height: 40px;
	color: #999;  
`