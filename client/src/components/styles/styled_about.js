import styled from 'styled-components';

export const StyledAbout = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction:column;
	min-height: 60vh;

	.about_text {
		text-align: center;
	}
	
	.about_coders_container {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.about_coder{
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction:column;

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
`