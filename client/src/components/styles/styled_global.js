import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import arrow from '../../assets/img/arrow-down.svg';
import checkboxUnchecked from '../../assets/img/checkbox-unchecked-purple.svg'
import checkboxChecked from '../../assets/img/checkbox-checked-purple.svg'

export const Btn = styled.button`
	font-weight: 900;
	border: 3px solid;
	border-radius: 10em;
	padding: .7em 1.2em;
	transition: transform 25ms ease, box-shadow 25ms ease;
	min-width: 175px;
	cursor: pointer;

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
		padding: 1em 4em 1em 1.2em;
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

export const DataTable = styled.table`
	margin-top: 3em;
	text-align: center;
	font-size: .75em;
	border-radius: .4em;
	border: 1px solid #CCC;
	border-spacing: 0;
	box-shadow: 8px 8px 0px rgba(0,0,0,.05);
	table-layout: fixed;
	width: 100%;

	thead {
		background: #EEE;
		font-weight: 900;
		text-transform: uppercase;
		font-size: .85em;
		letter-spacing: .05em;
	}

	/* Seteamos el ancho de las columnas desde el thead porque en el tbody no puedo:
	ID - Stock - Visible quiero que tengan ancho fijo. Las demás no me importan por el momento, que ocupen lo que sobra.
	*/
	thead td:nth-of-type(1),
	thead td:nth-of-type(3),
	thead td:nth-of-type(4){
		width: 75px;
	}

	/* Esto es opcional:
	tbody tr:hover {
	background: #E5E5E5 !important;
	}*/

	tbody tr:nth-of-type(even) { background: #EEE; }
	tbody td:nth-of-type(2) { text-align: left; }

	td {
		padding: .75em 1em;
		border-bottom: 1px solid #CCC;
	}

	tbody tr:last-of-type td { border-bottom: 0; }

	td ul {
		list-style: none;
		display: flex;
		justify-content: center;
	}

	td button {
		background: none;
		border: 1px solid var(--clr-dark);
		border-radius: .3em;
		padding: .5em 1em;
		font-size: inherit;
		margin: 0 .5em;
	}

	td button:hover {
		background-color: var(--clr-dark);
		color: var(--clr-white);
	}

	td button:active {
		transform: scale(0.95);
	}


	@media (max-width: 1000px) {
		font-size: .7em;

		thead td:nth-of-type(1),
		thead td:nth-of-type(3),
		thead td:nth-of-type(4){
			width: 50px;
		}

		td ul { flex-direction: column; }

		td button { margin: .5em 0; }
	}
`

export const FormStyled = styled.form`

	.flex-form-container {
		display: flex;

		@media (max-width: 1050px) {
			display: block;
		}

		& > div + div  {
			margin-left: 3em;

			@media (max-width: 1050px) {
				margin: 1.5em 0 0;
			}
		}
	}
		label {
			display: block;
			position: relative;
			width: 400px;
		
			& > span:not(.no-shadow) {
				position: absolute;
				left: 1em;
				top: -.5em;
				padding: 0 .5em;
				font-weight: 900;
				font-size: .9em;
				background: var(--clr-white);
			}

			& > input,
			& > textarea {
				font: inherit;
				font-size: .8em;
				padding: 1em;
				border: 3px solid var(--clr-primary);
				border-radius: .4em;
				background: var(--clr-white);
				width: 100%;
				transition: box-shadow .2s ease;
				outline: none;
			}

			& > textarea {
				line-height: 1.6;
			}

			&:not(.no-shadow)::after {
				content: '';
				position: absolute;
				top: 5px;
				bottom: -5px;
				left: 5px;
				width: 100%;
				border-radius: .4em;
				background: var(--clr-primary);
				opacity: 0.15;
				transition: opacity .2s ease;
				z-index: -1;
			}

			&:focus-within::after {
				opacity: 1;
			}
		}

		label + label { margin-top: 2em; }
		
		input, textarea {
			width: 300px;
			display: block;
			border: 0;
			font: inherit;
			padding: .5em;
			border: 3px solid var(--clr-primary);
			border-radius: .3em;
			margin-top: .3em;

			&:focus {
				border-color: var(--clr-primary-2);
			}
		}

		textarea { height: 150px; }

		input[type=checkbox] {
			width: auto;
			display: inline;
			margin: 0 1em 1em 0;
		}

		ul {
			list-style: none;
			text-transform: capitalize;
			margin-top: 1em;
			width: 300px;
			columns: 2;
			column-fill: balance-all;

			li {
				padding: .5em 0;
			}
		}

		.form__categorias {
			display: inline-block;
			font-size: 1.5em;
			margin-top: 1em;
		}

		button:last-child { margin-top: 2em; }

		select {
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
		}

`

export const CheckboxLabel = styled.label`
	&.check {

		span { padding-left: 1.5em; }

		input[type="checkbox"] {
			vertical-align: middle;
			opacity: 0;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		&::after {
			content: '';
			background: url(${props => props.checked ? checkboxChecked : checkboxUnchecked}) center no-repeat;
			background-size: 100%;
			display: block;
			width: 20px;
			height: 20px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`

export const MiniCard = styled.article`
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

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
		
		svg {
			width: 25px;
			height: 25px;
			fill: var(--clr-primary);
		}

	&:hover svg {
		fill: var(--clr-primary-2);
	}

	&:focus {
		outline: none;
	}
	&:active{
		transform: translateY(1px);
	}
}	
`

export const Dropdown = styled.li`
	position: relative;
	padding-bottom: .8em;
	margin-bottom: -.8em;

	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;
		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;
			a{
				border-radius: .4em;
			}
			&:last-of-type a {
				border-radius: .4em;
			}
		}
	}

	&:hover > ul {
		display: block;
		list-style: none;
	}

	& > ul {
		min-width: 150px;
		display: none;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 0.9em;
		color: var(--clr-dark);
		background-color: var(--clr-white);
		box-shadow: 0 0 10px black;
		border-radius: .4em;
		z-index: 10;

		&::before {
			content: '';
			width: 0px;
			height: 0px;
			position: absolute;
			top: -19px;
			left: 50%;
			transform: translateX(-50%);
			border: 10px solid transparent;
			border-bottom-color: var(--clr-white);
		}

		& li {
			margin: 0;
			width: 100%;
		
			&:last-of-type a {
				border-radius: 0 0 .3em .3em;
			}
		}


		a {
			text-align: center;
			display: block;
			width: 100%;
			padding: 1em 2em;
			text-decoration: none;
			color: currentColor;

			&:hover {
				background-color: var(--clr-primary-2);
				color: var(--clr-white)
			}
		}

		.dropdown__first-name {
			color: var(--clr-primary);
			font-size: 1.3em;
			font-family: Poppins, Raleway, sans-serif;
			font-weight: 900;
			border-bottom: 1px solid #CCC;
			padding-bottom: .5em;
			margin-bottom: .5em !important;
			text-align: center;
		}
	}

`

export const StyledSVG = styled(SVG)`
`