import styled from 'styled-components';

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