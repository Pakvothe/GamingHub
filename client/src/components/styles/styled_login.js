import styled from 'styled-components';

export const LoginStyled = styled.div`

.titulo{
	margin: 0 auto 1em auto;
	width: 50%;
	text-align: center;
}

.btn-ppal{
	margin-left: 25%;
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
		fill: currentColor;
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
}
`