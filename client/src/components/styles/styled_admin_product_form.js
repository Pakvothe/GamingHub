import styled from 'styled-components';

const AdminProductFormStyled = styled.form`
font-size: 13px;
columns: 2;

	label {
		display: block;
	}
	& > label + label { margin-top: 1.5em; }
	
	input, textarea {
		width: 300px;
		display: block;
		border: 0;
		font: inherit;
		padding: .5em;
		border: 3px solid var(--clr-primary);
		border-radius: .3em;

		&:focus {
			border-color: var(--clr-primary-2);
		}
	}

	textarea {
		height: 150px;
	}


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

	button {
		background-color: var(--clr-primary);
		padding: .8em 1.1em;
		border: 0;
		color: white;
		font-weight: 700;
		border-radius: 10em;
		box-shadow: 3px 4px 0px rgba(0,0,0,.1);
		cursor: pointer;
		transition: transform .05s ease-in;
		margin-top: 1em;

		&:hover {
			background-image: linear-gradient(45deg, var(--clr-primary), var(--clr-secondary));
		}

		&:active {
			transform: translate(2px, 2px);
			box-shadow: none;
		}
	}
`

export default AdminProductFormStyled