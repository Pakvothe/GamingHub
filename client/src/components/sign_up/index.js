import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users_actions';
import { FormStyled, Btn } from '../styles/styled_global';

const SignUp = () => {
	const dispatch = useDispatch()
	const language = useSelector((state) => state.globalReducer.language);

	let [input, setInput] = useState({
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		language,
		is_admin: false,
	})

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(addUser(input));
	}

	return (
		<>
			<FormStyled onSubmit={handleSubmit} autoComplete="off">
				<h1 className='form__title'>SignUp</h1>
				<label>
					<span>Username:</span>
					<input type="text" value={input.username} name="username" onChange={handleChange} required />
				</label>
				<label>
					<span>Password:</span>
					<input type="password" value={input.password} name="password" onChange={handleChange} required />
				</label>
				<label>
					<span>Email:</span>
					<input type="email" value={input.email} name="email" onChange={handleChange} required />
				</label>
				<label>
					<span>Nombre:</span>
					<input type="text" value={input.first_name} name="first_name" onChange={handleChange} required />
				</label>
				<label>
					<span>Apellido:</span>
					<input type="text" value={input.last_name} name="last_name" onChange={handleChange} required />
				</label>
				<Btn type="submit" className="btn-ppal"> Registrate wey	</Btn>
			</FormStyled>
		</>
	)
}

export default SignUp