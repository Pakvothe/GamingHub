import styled from 'styled-components';

const AdminProductFormStyled = styled.form`
	font-size: 13px;

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

		label { display: block; }

		label + label { margin-top: 1.5em; }
		
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
			columns: 2;
			margin-top: 1em;
			width: 300px;
		}

		.form__categorias {
			display: inline-block;
			font-size: 1.5em;
			margin-top: 1em;
		}

		button:last-child { margin-top: 2em; }
	}
`

export default AdminProductFormStyled