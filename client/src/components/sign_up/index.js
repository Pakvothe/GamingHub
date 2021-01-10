import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users_actions';
import { FormStyled, Btn } from '../styles/styled_global';
import strings from './strings'

const SignUp = () => {
	const dispatch = useDispatch()
	const history = useHistory();
	const language = useSelector((state) => state.globalReducer.language);
	let [input, setInput] = useState({
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		is_admin: false,
	});

	let [passwordMessage, setPasswordMessage] = useState(false);
	let [emailMessage, setEmailMessage] = useState(false);

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(input.password)) {
			dispatch(addUser(input))
				.then(() => history.push('/'))
				.catch((err) => {
					setPasswordMessage(false);
					if (err.message === 'email must be unique') setEmailMessage(true);
				})
		} else {
			setPasswordMessage(true);
			setEmailMessage(false);
		};
	}

	return (
		<>
			<FormStyled onSubmit={handleSubmit} autoComplete="off">
				<h1 className='form__title'>{strings[language].signUp}</h1>
				<label>
					<span>{strings[language].name}</span>
					<input type="text" value={input.first_name} name="first_name" onChange={handleChange} required />
				</label>
				<label>
					<span>{strings[language].lastName}</span>
					<input type="text" value={input.last_name} name="last_name" onChange={handleChange} required />
				</label>
				<label>
					<span>{strings[language].email}</span>
					<input type="email" value={input.email} name="email" onChange={handleChange} required />
				</label>
				{emailMessage && strings[language].inUse}
				<label>
					<span>{strings[language].password}</span>
					<input type="password" value={input.password} name="password" onChange={handleChange} required />
				</label>
				{passwordMessage && strings[language].passwordMessage}<br />
				<Btn type="submit" className="btn-ppal">{strings[language].signUp}</Btn>
			</FormStyled>
		</>
	)
}

export default SignUp