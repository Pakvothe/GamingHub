import styled from 'styled-components';
import { AdminBarLogic } from '../admin_page/admin_side_bar';

export const SideBarContainer = styled.div`
	position: absolute;
	color: var(--clr-white);
	background-color: var(--clr-primary);
	display: flex;
	width: ${props => props.pWidth}px;
	height: 100% ;
	min-height: ${props => props.pHeight}px;
	border-right: none;
	border-radius: 0;
	border-color: rgba(64, 194, 133, 0.693);
	transition: 0.8s ease;
	transform: translatex(${props => props}px);
	transform: translatex(${props => props.value}px);
	`
export const ItemBox = styled.div`	
	position: relative;
	align-items: flex-start;
	justify-content: space-evenly;
	color: var(--clr-white);
	flex-direction: column;
	padding: 0 auto;
	
	h1{
		margin: 0.5em 0.5em 0 0.5em;
	}
	h2{
		margin: 0.5em;
	}
`

export const SideBarButton = styled.button`
	position: relative;
	color: var(--clr-white);
	background: transparent;    
    border: none;
	transform: translate( ${props => props.pWidth}px,10px);
	text-align: right;
	
	&:hover, &:focus {
		filter: brightness(75%);
		outline: none;
  		box-shadow: none;
		}

	img {
		stroke: var(--clr-primary);
		height: 2em;
	}
`