import styled from 'styled-components';

export const UserCard = styled.div`
	display:flex;
	border: 4px solid var(--clr-primary);
	border-radius: 1em;
	overflow: hidden;
	box-shadow: 10px 10px 0px var(--clr-primary);
	ul{
		flex-basis: 300px;
		background-color: var(--clr-dark);
		color: var(--clr-white);
		text-transform: uppercase;
		list-style: none;
		a{
			display: block;
			text-decoration: none;
			color: currentColor;
			padding: 2em;
			border-right: 4px solid transparent;
			&:hover{
				background-color: #222;
				border-color: var(--clr-primary);
			}
		}
	}

	@media (max-width: 800px) {
		flex-direction:column;

		  ul {
			  display: flex;
			  flex-direction: column;		
			  align-items: center;
			  flex-basis: 200px;
		    }
	  }
`