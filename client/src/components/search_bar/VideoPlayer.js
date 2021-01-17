import React from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyledSVG } from '../styles/styled_global';
import closeCross from '../../assets/img/close-filled-purple.svg';
import YouTube from 'react-youtube'
import { useDispatch } from 'react-redux';
import { closeVideo } from './../../redux/actions/global_actions';

const VideoPlayer = ({ open, videoCode }) => {

	const theme = useSelector(state => state.globalReducer.theme);
	const dispatch = useDispatch();
	const CloseButton = styled.button`
		position: absolute;
		cursor: pointer;
		top: 10px;
		right: 10px;
		border: none;
		width: 40px;
		height: 40px;
		background: transparent;

		svg {
			fill: var(--clr-primary);
			transition: fill .2s ease-in-out;
			width: 40px;
			height: 40px;
		}

		&:hover svg {
			fill: var(--clr-primary-2);
		}
	`

	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(44, 47, 49, 0.95)',
			zIndex: '9999'
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			paddingTop: '4em',
			transform: 'translate(-50%, -50%)',
			border: '2px solid #9b5df7',
			borderRadius: '10px',
			boxShadow: '0 0 5px #9b5df7',
			color: theme === 'dark' ? '#F5F4F8' : '#1B1A1F',
			background: theme === 'dark' ? '#2C2F31' : '#F5F4F8',
			WebkitOverflowScrolling: 'touch',
			zIndex: '9999',
		},
	};

	const opts = {
		height: document.documentElement.clientHeight - 150,
		width: document.documentElement.clientWidth - 150,
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handlePause = (ev) => {
		if (videoCode === 'dQw4w9WgXcQ') ev.target.playVideo();
	}

	const handleClose = () => {
		dispatch(closeVideo());
	}


	return (
		<div>
			<Modal
				isOpen={open}
				style={customStyles}
				contentLabel='Video'
				portalClassName='ReactModalPortal'
				ariaHideApp={false}
			>
				<CloseButton className='mb-1' onClick={handleClose} ><StyledSVG src={closeCross} /></CloseButton>
				<YouTube videoId={videoCode} opts={opts} onPause={handlePause} />
			</Modal>
		</div>
	)
}

export default VideoPlayer;
