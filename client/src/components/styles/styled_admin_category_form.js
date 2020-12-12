import styled from "styled-components";

export const CategoryFormStyled = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 13px;
	label {
		display: block;
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
		&:focus {
			outline: none;
			border-color: var(--clr-primary-2);
		}
	}
	button {
		background-color: var(--clr-primary);
		min-width: 75px;
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
			outline: none;
			transform: translate(2px, 2px);
			box-shadow: none;
		}
	}
`;