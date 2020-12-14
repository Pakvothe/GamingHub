import styled from "styled-components";

export const CategoryFormStyled = styled.form`
	font-size: 13px;

	label { display: block; }

	label + label {
		margin-top: 1.5em;
	}
	
	input {
		width: 300px;
		display: block;
		border: 0;
		font: inherit;
		padding: .5em;
		border: 3px solid var(--clr-primary);
		border-radius: .3em;
		margin-top: .3em;

		&:focus {
			outline: none;
			border-color: var(--clr-primary-2);
		}
	}

	button:last-child { margin-top: 2em; }
`;