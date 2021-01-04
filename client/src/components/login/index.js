import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openLogin } from '../../redux/actions/global_actions';
import { FormStyled, Btn, StyledSVG } from '../styles/styled_global';
import { LoginStyled } from '../styles/styled_login';
import CloseButton from '../../assets/img/close-filled-purple.svg';
import strings from './strings';

const Login = () => {
	const dispatch = useDispatch();
	const loginIsOpen = useSelector(state => state.globalReducer.loginIsOpen);
	const language = useSelector(state => state.globalReducer.language);
	const theme = useSelector(state => state.globalReducer.theme);

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


	const afterOpenModal = () => {
		document.body.style.overflow = 'hidden';
	}

	const closeModal = () => {
		dispatch(openLogin(false))
		document.body.style.overflow = 'unset';
	}


	return (
		<Modal
			isOpen={loginIsOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel={'Login'}
			portalClassName={'ReactModalPortal'}
			ariaHideApp={false}
		>
			<LoginStyled theme={theme}>
				<button className='button' onClick={closeModal}><StyledSVG src={CloseButton} /></button>
				<FormStyled>
					<h2 className='form__title titulo'>{strings[language].title}</h2>
					<label>
						<span>{strings[language].user}</span>
						<input type='text'
							style={{
								color: theme === 'dark' ? '#F5F4F8' : '#1B1A1F',
								background: theme === 'dark' ? '#2C2F31' : '#F5F4F8',
								border: '3px solid var(--clr-primary)'
							}}
							required />
					</label>
					<label>
						<span>{strings[language].pass}</span>
						<input type='password'
							style={{
								color: theme === 'dark' ? '#F5F4F8' : '#1B1A1F',
								background: theme === 'dark' ? '#2C2F31' : '#F5F4F8',
								border: '3px solid var(--clr-primary)'
							}}
							required />
					</label>
					<div className='link_container'>
						<Link>{strings[language].olvi}</Link>
						<Link>{strings[language].create}</Link>
					</div>
					<Btn type='submit' className='btn-ppal'>Ok</Btn>
				</FormStyled>
			</LoginStyled>
		</Modal>
	)
}

export default Login;