import styled from 'styled-components';

export const StyledReviews = styled.section`
	margin-top: 3em;
	/* overflow: hidden; */

	.reviews__filter {
		button {
			font: inherit;
			background: none;
			border: none;
			text-transform: lowercase;
			margin: 0 .5em;

			&::after {
				content: '|';
				margin-left: 1em;
				font-weight: 500;
			}

			&:last-child::after {
				display: none;
			}
			
			&.filter__selected {
				font-weight: 900;
				color: var(--clr-primary);
			}
		}
	}

	.reviews__container {
		margin-top: 3em;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		@media (max-width: 600px) {
			flex-direction: column;
			
			.review {
				flex-basis: auto;
				margin: 0 0 2em 0;

				.review__description {
					text-align: center !important;
				}
			}
		}

		.review {
			flex-basis: 45%;
			margin-bottom: 5em;
			text-align: center;

			.review__username {
				font-weight: 900;
				font-size: 1.2em;
			}

			.review__stars {
				display: block;
				margin: .75em 0;
			}

			.review__description {
				text-align: left;
				line-height: 1.5;
				a{
					color: var(--clr-primary);
					text-decoration: none;
					font-weight: 700;
					font-size: 1.2em;
					opacity: 1;
					&:hover{
						color: var(--clr-secondary);
					}
				}
				&>span{
					&>span{
						&>span{
							&:last-child{
								&>span{
									span:first-child{
										opacity: .5;
										color: var(--clr-primary-2);
									}
								}
							}
						}
					}
				}
			}
		}
	}
`