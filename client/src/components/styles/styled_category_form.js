import styled from "styled-components";

export const CategoryFormStyled = styled.form`
	display: flex;
	margin-top: 50px;
	flex-direction: column;
	flex-wrap: 0;
	flex-shrink: 0;
	justify-content: center;
	align-items: center;
	button {
		margin: 50px 0;
		display:inline-block;
		cursor: pointer;
		color: white;
		background-color: var(--clr-primary);
		width: 160px;
		padding: 6px;
		border-radius: 20px;
		border: 2px solid var(--clr-primary);
	}
`;