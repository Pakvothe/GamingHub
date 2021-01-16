import styled from 'styled-components';

export const StyledAdminProductList = styled.div`
	.header__container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			display: flex;
		}
	}

	@media (max-width: 1070px) {
		.header__container{
			flex-direction: column-reverse;

			.mr-1 {
			margin-bottom: 1em;
		}
			input{
				margin-bottom: 1em;
			}
		}
	}

	@media (max-width: 530px) {
		div{
		flex-direction: column;
	}
	}
`