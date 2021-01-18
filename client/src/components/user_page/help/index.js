import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormStyled, Btn, Flex } from '../../styles/styled_global';
import strings from './strings';
import { useToasts } from 'react-toast-notifications';
import Fade from 'react-reveal/Fade';

const HelpUser = () => {
	const { REACT_APP_API } = process.env;
	const history = useHistory();
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
	const { addToast } = useToasts();

	let [input, setInput] = useState({
		email: '',
		subject: '',
		message: '',
	})
	let [isLoading, setIsLoading] = useState(false);

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		setIsLoading(true);
		return axios.post(`${REACT_APP_API}/users/mail/send`, input)
			.then((data) => {
				addToast(s.mailSend, { appearance: 'success' })
				history.push('/');
			})
			.catch((err) => {
				setIsLoading(false)
				addToast(s.notSend, { appearance: 'error' })
			})
	}

	return (
		<Fade>
			<h2 className='form__title'>{s.title}</h2>
			<Flex >
				<FormStyled onSubmit={handleSubmit} autoComplete="off">
					<label>
						<span>{s.mail}</span>
						<input type="email" value={input.email} name="email" onChange={handleChange} required />
					</label>
					<label>
						<span>{s.subject}</span>
						<input type="text" value={input.subject} name="subject" onChange={handleChange} required />
					</label>
					<label>
						<span>{s.message}</span>
						<textarea type="text" value={input.message} name="message" onChange={handleChange} required />
					</label>
					<div className="text-center">
						<Btn type="submit" className="btn-ppal mr-1 mt-1">{
							isLoading ?
								<span><i className='fas fa-circle-notch fa-spin mr-1'></i>{s.loading}</span>
								: <span>{s.send}</span>
						}
						</Btn>
						<Btn onClick={() => history.push('/')} className="btn-sec mr-1 back">{s.volver}</Btn>
					</div>
				</FormStyled>
			</Flex>
		</Fade>
	)
}

export default HelpUser;