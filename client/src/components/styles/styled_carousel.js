import styled from 'styled-components';

export const StyledCarousel = styled.div`

.embla {
	position: relative;
	margin-top: ${props => props.full ? '0' : '10px'};
}

.embla__viewport {
	overflow: hidden;
	width: 100%;
}

.embla__viewport.is-draggable {
	cursor: move;
	cursor: grab;
}

.embla__viewport.is-dragging {
	cursor: grabbing;
}

.embla__container {
	display: flex;
	user-select: none;
	-webkit-touch-callout: none;
	-khtml-user-select: none;
	-webkit-tap-highlight-color: transparent;
	margin-left: -30px;
}

.embla__slide {
	position: relative;
	min-width: ${props => props.full ? '100%' : '80%'};
	padding-left: ${props => props.full ? '0' : '30px'};
}

.embla__slide__inner {
	position: relative;
	overflow: hidden;
	height: 60vh;
	min-height: ${props => props.full ? '600px' : 'auto'};
	border-radius: ${props => props.full ? '0' : '1em'};
	
	@media (max-width: 1000px) {
		min-height: auto;
		height: 50vh;
	}

	.embla__slide__detail {
		color: var(--clr-white);
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2em 3em;
		background: transparent;
		background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);

		.slide__details__left {
			text-align: center;
			margin-right: 1em;

			a {
				
				text-decoration: none;
				color: var(--clr-white);
				transition: color .2s ease-in-out;

			}
		}

		.slide__details__right {
			text-align: right;
		}

		@media (max-width: 1000px) {
			font-size: 0.7em;
			height: 100%;
			flex-direction: column;
			padding: 2em;

			.slide__details__left {
				justify-self: flex-start;
				margin: 0;
				max-width: 100%;
				width: 100%;
			}

			.slide__details__right {
				text-align: center;
			}

		}

		.slide__title {
			font-size: 3em;
			text-shadow: 5px 5px 0px var(--clr-primary-2), 0 0 20px rgba(0,0,0,0.5);
			transition: text-shadow .15s ease-in-out, transform .15s ease-in-out;

			&:hover {
				transform: translate(3px, 3px);
				text-shadow: 2px 2px 0px var(--clr-secondary), 0 0 20px rgba(0,0,0,0.5);
			}
		}

		.slide__price, .slide__discount {
			margin-right: .5em;
		}

		.slide__price {
			font-size: 2.5em;
			font-weight: 900;
			text-shadow: 5px 5px 0px var(--clr-primary-2), 0 0 20px rgba(0,0,0,0.5);
		}

		.slide__discount {
			font-size: 1.5em;
			background-color: var(--clr-secondary);
			padding: .2em;
			border-radius: 0.3em;
			opacity: 0.9;
		}

		.slide__btn {
			font-size: 1.2em;
			padding: 1em 3em 1em 1em;
			margin-top: 1em;
			border-width: 4px;
			position: relative;
			cursor: pointer;

			&:hover {
				transform: translate(2px, 2px);
				outline: 0;
				box-shadow: none;
			}
		}
	}
}

.embla__slide__img {
	position: absolute;
	display: block;
	top: 50%;
	left: 50%;
	width: auto;
	min-height: 100%;
	min-width: 100%;
	max-width: none;
	transform: translate(-50%, -50%);
}

.embla__button {
	outline: 0;
	cursor: pointer;
	background-color: transparent;
	touch-action: manipulation;
	position: absolute;
	z-index: 1;
	top: 50%;
	transform: translateY(-50%) scale(1);
	border: 0;
	border-radius: 2em;
	background-color: var(--clr-primary);
	opacity: 0.8;
	box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, .5);
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	fill: var(--clr-white);
	padding: 0;
	transition: transform .4s ease;

	&:active {
		transform: scale(0.95) translateY(-50%);
	}

	&:hover {
		background-color: var(--clr-primary-2)
	}
}

.embla__button:disabled {
	cursor: default;
	opacity: 0.3;
}

.embla__button__svg {
	width: 100%;
	height: 100%;
}

.embla__button--prev {
	left: ${props => props.full ? '5%' : '15%'};
	
}

.embla__button--next {
	right: ${props => props.full ? '5%' : '15%'};
}

`