import styled from 'styled-components';
import arrow from '../../assets/img/arrow-down.svg';

export const CatalogStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2em;
	min-height: 700px;
`;

export const SelectStyled = styled.select`
	font-family: inherit;
	font-size: 0.7em;
	border: 3px solid var(--clr-primary);
	border-radius: .5em;
	width: 200px;
	padding: .5em 3em .5em .7em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: url(${arrow}) 95% center no-repeat;
	background-size: 1.5em;
	margin-left: 1em;
	text-transform: uppercase;

	&::-ms-expand {
		display: none;
	}

	&:hover, &:focus {
		outline: 0;
		border-color: var(--clr-primary-2);
		box-shadow: 0 0 10px rgba(0,0,0,.15);
	}
	&.select__order-admin{
		width: 100%;
		max-width: 200px;
		margin: 0 auto;
	}
`;
