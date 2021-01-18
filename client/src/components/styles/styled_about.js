import styled from 'styled-components';

export const StyledAbout = styled.div`
	min-height: 60vh;
	line-height: 1.5;

	h2 {
		text-align: center;
		margin-bottom: 1em;
		text-transform: uppercase;
		font-size: 2em;
	}

	h3 {
		margin-bottom: 1em;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
	}
	
	.about_coders_container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 3em;

		.about_coder{
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: column;
			flex: 1 0 20%;

			h4{
				margin-bottom: 1em;
			}

			img {
				margin-bottom: 1em;
				width: 9em;
				height: 9em;
				border-radius: 99em;
				object-fit: cover;
				border: 3px solid var(--clr-primary);
				transition: filter .2s ease-in-out;
				
				&:hover {
					filter: grayscale(100%);
				}
			}

			.about_social{
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				width: 100%;

				i {
					text-decoration: none;
					font-size: 2em;
					color:${props => (props.theme === 'dark' ? 'var(--clr-white)' : 'var(--clr-dark)')};
					transition: color .2s ease-in-out;

					&:hover {
						color: var(--clr-primary-2);
					}
				}
			}
		}
	}

	@media (max-width: 900px) {
		.about_coders_container {
			flex-direction: column;
			margin: 1em 0;

			.about_coder {
				margin: 2em 0;

				h4 {
					font-size: 1.5em;
				}

				img {
					width: 14em;
					height: 14em;
				
				}

				.about_social{ 
					i {
						font-size: 3em;
					}	
				}
			}

		}
	}

`