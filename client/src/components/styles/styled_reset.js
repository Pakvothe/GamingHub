import styled from "styled-components";

export const ResetMain = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ResetStep = styled.div`
	margin-top: 40px;
	position: relative;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	label {
		margin-top: 10px;
	}

	.reset__description {
		width: 400px;
	}

	.error-bubble {
		position: absolute;
		left: calc(100% + 2em);
		top: 10px;
		padding: 1em 1.5em;
		width: 300px;
		border: 2px solid var(--clr-error);
		border-radius: 0.4em;
		
		h4 {
			font-weight: 700;
			margin-bottom: 5px;
		}

		p {
			margin-left: 10px;
			margin-bottom: 3px;
		}
	}
`;