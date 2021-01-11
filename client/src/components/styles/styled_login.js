import styled from 'styled-components';

export const LoginStyled = styled.div`

.titulo{
	margin: 0 auto 1.5em auto;
	width: 50%;
	text-align: center;
}

.link_container{
	display:flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 1em;
	justify-content: space-between;

	a {
		color: ${props => (props.theme === 'dark' ? 'var(--clr-white)' : 'var(--clr-dark)')};
		text-decoration: none;
		transition: color .2s ease-in-out;

		&:hover{
			color: var(--clr-primary);
		}
	}

	& > a + a{
		margin-top: .5em;
	}
}

label {
	left: 50%;
	transform: translateX(-50%);
}

.btn-ppal{
	margin-left: 25%;
	margin-top: 1em;
	width: 50%;
}
.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
}

.ReactModal__Overlay--after-open{
	opacity: 1;

}

.ReactModal__Overlay--before-close{
	opacity: 0;
}

 .button{
	display: block;
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	width: 30px;
	height: 30px;
	
	&:hover{
		cursor: pointer;
	}
	
	svg {
		fill: ${props => (props.theme === 'dark' ? 'var(--clr-white)' : 'var(--clr-dark)')};
		width: 30px;
		height: 30px;
		transition: fill .2s ease-in-out;
		&:hover {
			fill:var(--clr-primary);
		}
		&:active {
			transform: scale(0.9);
		}
	}



	@media (max-width: 1050px) {
		.ReactModal__Body--open {
			.flex-form-container {
				display: block;
		 	}
		}
	}

	@media (max-width: 480px) {
		.ReactModal__Body--open {

			.flex-form-container {

				width: 100%; 
				justify-content: center;

				input {
					width: 100%;

				}
				label {
				width: 70vw; 
				justify-content: center;
				}

				.contact__info {
				width: 300px; 
				}
			}
		}
	}
}
`