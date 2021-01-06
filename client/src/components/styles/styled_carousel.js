import styled from 'styled-components';

export const StyledCarousel = styled.div`

.embla {
	position: relative;
	margin-top: 10px;
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
	min-width: 80%;
	padding-left: 30px;
}

.embla__slide__inner {
	position: relative;
	overflow: hidden;
	height: 60vh;
	border-radius: 1em;
	.embla__slide__detail {
		color: var(--clr-white);
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
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
	left: 15%;
}

.embla__button--next {
	right: 15%;
}

`