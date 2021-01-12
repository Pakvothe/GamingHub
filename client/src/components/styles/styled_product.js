import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const GameDetail = styled.section`
	display: flex;

	@media (max-width: 1000px) {
		flex-direction: column;
	}

  .game__img {
	flex: 1;
    margin-right: 1.5em;
	border: 3px solid var(--clr-primary);
	border-radius: 1em;
	overflow: hidden;
	height: 100%;
	cursor: pointer;

	@media (max-width: 1000px) {
		max-height: 300px;
		margin-bottom: 1em;
	}


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
	  object-position: top center;
	  
	  @media (max-width: 1000px) {
		  object-position: center;
	  }
    }
  }

  .game__info {
	flex: 1;
	margin-left: 1.5em;

	@media (max-width: 1000px) {
		margin-left: 0;
	}

	h1 {
		font-size: 2.2em;
		margin-bottom: .3em;
		line-height: 1.3;
    }

    .game__categories {
      display: flex;
	  list-style: none;
	  flex-flow: row wrap;
      
		li {
			font-size: .6em;
			margin-right: 1em;
			background: var(--clr-dark);
			border-radius: .5em;
			padding: .5em 1em;
			color: var(--clr-white);
			margin-bottom: 1em;
		}
    }

	.game__container-price-score {
		display: flex;
		align-items: center;
	}

	.game__price {
		font-family: Poppins, Raleway, sans-serif;
		font-weight: 400;
		font-size: 1.6em;
		margin-right: 1em;
	}

	.game__description {
		line-height: 1.6;
		margin-top: 3em;
	}
	
	.game__quantity {
		margin-top: 2em;

		span:first-child {
			margin-right: 1em;
		}

		@media (max-width: 400px) {
			span:first-of-type {
				display: block;
			}
		}
	}
	
	
    .game__quantityvalue{
		font-weight: bold;
		font-size: 1.5em;
		margin: 0 .4em;
    }
	
	.game__stock {
		margin: 1em 0 2em;
		font-weight: 900;
	}

    .game__buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		button{
			margin-bottom: 0.5em;
		}
		
		@media (max-width: 500px) {
			align-items: center;

			button:first-of-type {
				margin-bottom: 1em;
			}
		}
    }

    .game__purchase-container {
      display: flex;
	  justify-content: space-between;
	  align-items: center;
	  @media (max-width: 500px) {
		  flex-direction: column;
		  align-items: center;
	  }
    }

	.game__payment-methods-icons {
		max-width:300px;
		
		@media(max-width: 500px) {
			margin-top: 2em;
		}
	}

  }
`;

export const StyledSVG = styled(SVG)`

`