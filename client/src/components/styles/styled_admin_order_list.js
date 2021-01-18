import styled from 'styled-components';

export const StyledAdminOrderList = styled.div`

.options__container{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	select {
		height: 30px;
	}

	input, button {
		height: 35px;
	} 
}

	@media(max-width: 1200px) {
		.options__container {
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			input, button {
				margin-right: 0;
				margin-bottom: 1em;
				width: 250px;
			} 
		}
		
		.select{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1em;
		}
	}
`