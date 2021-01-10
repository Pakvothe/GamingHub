import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';
import arrow from '../../assets/img/arrow-down.svg';
import checkboxUnchecked from '../../assets/img/checkbox-unchecked-purple.svg'
import checkboxChecked from '../../assets/img/checkbox-checked-purple.svg'
import LoadingOverlay from 'react-loading-overlay';
import facebook from '../../assets/img/facebook.svg'

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};
		
		.btn-sec {
			color: ${({ theme }) => theme.btnSecText};
			background-color: ${({ theme }) => theme.btnSecBg};
			box-shadow: ${({ theme }) => theme.btnSecShadow};
			border: ${({ theme }) => theme.btnSecBorder};
			&:hover {
				border: ${({ theme }) => theme.btnSecHoverBorder};
			}
		}
		
		label > span:not(.no-shadow) {
			background: ${({ theme }) => theme.body};
			color:  ${({ theme }) => theme.text};
		}
		
		label > input,
		label > textarea {
				color:  ${({ theme }) => theme.text};
				background: ${({ theme }) => theme.body};
			}

		select {
			color:  ${({ theme }) => theme.text};
			
			option {
				background: ${({ theme }) => theme.body};
			}
		}

		.modal {
			background-color: ${({ theme }) => theme.body};
			color:  ${({ theme }) => theme.text};
		}
		
		.card {
			background: ${({ theme }) => theme.cardBg};
		}
		.card__title {
			@supports (-webkit-background-clip: text)  {
				background: ${({ theme }) => theme.cardText};
			}
		}

		table {
			thead { background: ${({ theme }) => theme.tableBg}; }
			tbody tr:nth-of-type(even) { background: ${({ theme }) => theme.tableBg}; }
			td button {
				border: 1px solid ${({ theme }) => theme.tableBtn};
				color: ${({ theme }) => theme.tableBtn};
			}

			td button:hover {
				background-color: ${({ theme }) => theme.tableBtn};
				color: ${({ theme }) => theme.tableBtnHoverText};
			}

		}
		.loading__overlay {
			background-color: ${({ theme }) => theme.loadingBg};
		}
		.loading__content{
			color: ${({ theme }) => theme.loadingColor};
		}

		.reviews__filter button,
		.reviews__filter button::after
		 {
			color: ${({ theme }) => theme.reviewColor};
		}
	}
`


export const Flex = styled.div`
	display: flex;
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
`

export const Hr = styled.hr`
	height: 1px;
	margin: 3em auto;
	border: none;
	background: #CCC;
`


// Styled components globales:
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

	&.btn-sec:hover {
		color: var(--clr-white);
		background-color: var(--clr-primary);
	}

	&.btn-danger {
		color: var(--clr-error);
		border-color: var(--clr-error);
		box-shadow: 2px 2px 0px rgba(0,0,0,.15);

		&:hover {
			color: var(--clr-white);
			background-color: var(--clr-error);
		}
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

	&.btn-tick {
		position: relative;
		&::after {
			visibility: hidden;
			position: absolute;
			content: '\f00c';
			color: var(--clr-success);
			font-weight: 400;
			font-size: 1.2em;
			font-family: 'font awesome 5 pro';
			animation: playtick 1.4s;
			right: -30px;
		}

		@keyframes playtick {
			0% {
				visibility: visible;
			}

			40% {
				transform: rotateZ(20deg);
			}
			60% {
				transform: rotateZ(0deg);
			}

			100%{

				visibility: visible;
			}
		}
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
	transition: box-shadow .25s ease;

	&:hover {
		box-shadow: 9px 9px 0px rgba(0,0,0,.07);
	}

	&.table-small {
		max-width: 400px;
	}

	thead {
		font-weight: 900;
		text-transform: uppercase;
		font-size: .85em;
		letter-spacing: .05em;
	}

	/* Seteamos el ancho de las columnas desde el thead porque en el tbody no puedo:
	ID - Stock - Visible quiero que tengan ancho fijo. Las demás no me importan por el momento, que ocupen lo que sobra.
	*/
	thead .cell-small {
		width: 90px;
	}

	td {
		position: relative;
		padding: .75em 1em;
		border-bottom: 1px solid #CCC;
		user-select: none;
		cursor: default;
	}

	.icon {
		cursor: pointer;
		&::after{
			font-family: "Font Awesome 5 Pro";
			font-weight: 700;
		}

		&.up::after{
			content: " \f077";
		}

		&.down::after{
			content: " \f078";
		}
	}

	.active::after{
		color: var(--clr-primary);
	}

	tbody tr:last-of-type td { border-bottom: 0; }

	td ul {
		list-style: none;
		display: flex;
		justify-content: center;
	}

	td button {
		background: none;
		border-radius: .3em;
		padding: .5em 1em;
		font-size: inherit;
		margin: 0 .5em;
	}

	td button:active {
		transform: scale(0.95);
	}

	tfoot td {
		border-top: 1px solid #CCC;
		border-bottom: none;
		font-size: 1.2em;
		font-weight: 700;
	}

	.row-link {
		cursor: pointer;
		
		&:hover {
			outline: 1px solid var(--clr-primary);
		}
	}
	.serial-form {
		max-width: 180px;
		margin: 0 auto;

		input {
			font-family: Poppins, Raleway, Arial, sans-serif;
			font-size: 1em;
			background: none;
			border-radius: .3em;
			border: 1px solid transparent;
			width: 100%;
			padding: .5em 1em;

			&:focus {
				outline: none;
				border: 1px solid var(--clr-primary);
			}

			&[disabled] {
				border: 1px solid transparent;
				color: inherit;
			}
		}
	}


	@media (max-width: 1000px) {
		font-size: .7em;

		thead .cell-small {
			width: 50px;
		}

		td ul { flex-direction: column; }

		td button { margin: .5em 0; }
	}
`

export const FormStyled = styled.form`

	.image__container {
		width: 400px;
	}

	.image_thumbnail {
		position: relative;
		display: inline-block;
		height: 5em;
		width: 5em;
		margin-right: 1em;
		margin-bottom: 1em;
		overflow: hidden;
		border-radius: 10px;
		cursor: pointer;

		.delete__image {
			pointer-events: none;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			color: white;
			font-size: 0.8em;
			font-weight: 900;
			padding: 0.5em;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: rgba(0,0,0,0.7);
			opacity: 0;
		} 

		&:hover {
			.delete__image {
				opacity: 1;
			}
		}

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.form__title {
		margin-bottom: 1em;
	}

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
			}

			& > input,
			& > textarea {
				font: inherit;
				font-size: .8em;
				padding: 1em;
				border: 3px solid var(--clr-primary);
				border-radius: .4em;
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
				break-inside: avoid;
				-webkit-column-break-inside: avoid;
				page-break-inside: avoid;
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
	padding: 1em 1.5em 1em 1em;

	a {
		color: currentColor;
		text-decoration: none;

		&:hover {
			color: var(--clr-primary);
		}
	}

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
		align-self: stretch;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.article__name{
			font-size: 1.1em;
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
			cursor: pointer;
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
	cursor: default;

	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;

		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;

			a{ border-radius: .4em }
			&:last-of-type a { border-radius: .4em }
		}
	}

	&:hover > ul {
		display:block;
		list-style: none;
	}

	& > ul {
		display: none;
		min-width: 150px;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 0.9em;
		color: var(--clr-dark);
		background-color: var(--clr-white);
		box-shadow: 0 0 20px rgba(0,0,0,.7);
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
			cursor: pointer;
			
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

export const Badge = styled.span`
	display: inline-block;
	min-width: 175px;
	margin-top: 1em;
	padding: .7em 1.2em;
	font-size: .75em;
	font-weight: 900;
	text-align: center;
	color: var(--clr-white);
	border-radius: 10em;

	&.warning {
		background-color: var(--clr-warning);
	}
	
	&.error {
		background-color: var(--clr-error);
	}

	&.success {
		background-color: var(--clr-success);
	}

	&.secondary {
		background-color: var(--clr-secondary);
	}

	&.dark {
		background-color: var(--clr-dark);
	}

	&.small {
		width: 50px;
	}
`

export const StyledLoader = styled(LoadingOverlay)`

	.loading__spinner {
		width: 100px;
		& svg circle { stroke: var(--clr-primary)}
	}

	.loading__content {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 2em;
		font-weight: 900;
	}
`

export const StyledTitle = styled.h2`
		text-align: center;
		text-transform: uppercase;
		font-size: 1.75em;
		margin-bottom: 1.5em;

		span {
			position: relative;
			display: inline-block;

			&::before {
				content: '';
				height: 1px;
				background: #555;
				position: absolute;
				left: -100%;
				top: 50%;
				width: 95%;
			}

			&::after {
				content: '';
				height: 1px;
				background: #555;
				position: absolute;
				right: -100%;
				top: 50%;
				width: 95%;
			}
		}
`

export const QuantityButton = styled.button`
	color: var(--clr-white);
	background-color: var(--clr-primary);
	border-radius: 100%;
	border: none;
	width: 25px;
	height: 25px;
	font-weight: 400;

	&:active {
		background-color: var(--clr-primary-2);
	}

	&.quantitybutton-small {
		width: 20px;
		height: 20px;
	}
`
export const SocialLogin = styled.div`
	margin: 1em;
	display: flex;
	align-items: center;
	justify-content: space-around;

	button:last-child{
		margin-left: 1em;
	}

	.social-btn {
		display: block;
		width: auto;
		margin: 0 auto;
		border: none;
		border-radius: 10px;
		box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
		cursor: pointer;
	
		
		text-align: right;
		padding: 1em 1em 1em 4em;

		&:hover {
			box-shadow: 0 0 6px var(--clr-primary);
		}
		&:active {
			background: var(--clr-secondary);
		}
	}
	
	.facebook-icon {
		background: url(${facebook}) no-repeat;
		background-size: 25px;
		background-position: left 1em top 50%;
		background-color: var(--clr-white); 
	}
	.google-icon{
		background: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg) no-repeat;
		background-size: 25px;
		background-position: left 1em top 50%;
		background-color: var(--clr-white);
	}

`

export const StyledSVG = styled(SVG)`
`