import styled from 'styled-components';
import { AdminBarLogic } from '../admin_page/admin_side_bar/SideBarLogic';

export const SideBarContainer = styled.div`
	transform: translatex(${props => props}px);
	width: ${props => props.pWidth}px;
	min-height: ${props => props.pHeight}px;
	height: 100% !important;
	display: flex;
	flex-direction: column;
	border-right: 1px solid;
	border-radius: 0;
	border-color: rgba(64, 194, 133, 0.693);
	background-color: rgb(255, 255, 255);
	transition: 0.8s ease;
	transform: translatex(${props => props.value}px);
	width: ${props => props.pWidth}px;
	min-height:  ${props => props.pHeight}px;
	background-color: var(--clr-primary);
`


export const SideBarButton = styled.button`
	transform: translate( ${props => props.pWidth}px, 20vh);
`

