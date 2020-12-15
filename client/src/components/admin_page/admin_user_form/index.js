import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Btn } from '../../styles/styled_global'
import { FormStyled, CheckboxLabel } from '../../styles/styled_global'

const AdminUserForm = function ({ user }) {
	const { id } = useParams();

	let [input, setInput] = useState({
		user: '',
		password: '',
		email: '',
		name: '',
		lastName: '',
		language: '',
		isAdmin: false,
	})

	useEffect(() => {
		if (id) {
			setInput(user)
		}
	}, [])


	const handleChange = (ev) => {
		ev.persist()
		if (ev.target.name === 'isAdmin') {
			setInput(prevState => ({
				...prevState,
				isAdmin: !prevState.isAdmin
			}))
		} else {
			setInput(prevState => ({
				...prevState,
				[ev.target.name]: ev.target.value
			}))
		}
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(input)
		// id ? dispatch(editUser(input)) : dispatch(addUser(input));
	}

	return (
		<>
			<h1 className="admin-h1">Agregar usuario</h1>
			<FormStyled action="post" onSubmit={handleSubmit} autoComplete="off">
				<label>
					<span>Username:</span>
					<input type="text" value={input.user} name="user" onChange={handleChange} />
				</label>
				<label>
					<span>Password:</span>
					<input type="password" value={input.password} name="password" onChange={handleChange} />
				</label>
				<label>
					<span>Email:</span>
					<input type="email" value={input.email} name="email" onChange={handleChange} />
				</label>
				<label>
					<span>Nombre:</span>
					<input type="text" value={input.name} name="name" onChange={handleChange} />
				</label>
				<label>
					<span>Apellido:</span>
					<input type="text" value={input.lastName} name="lastName" onChange={handleChange} />
				</label>
				<label className="no-shadow">
					Idioma:
				<select value={input.language} name="language" onChange={handleChange}>
						<option value="es">Español</option>
						<option value="en">Inglés</option>
					</select>
				</label>

				<CheckboxLabel className="no-shadow check" checked={input.isAdmin}>
					<input type="checkbox" checked={input.isAdmin} value={input.isAdmin} name="isAdmin" onChange={handleChange} />
					<span className="no-shadow">Admin</span>
				</CheckboxLabel>
				<Btn type="submit" className="btn-ppal">Agregar usuario</Btn>
			</FormStyled>
		</>
	)
}

AdminUserForm.defaultProps = {
	user: {
		user: 'Emiliano',
		password: '1234',
		email: 'emi@mail.com',
		name: 'Emiliano',
		lastName: 'Alfonso',
		language: 'es',
		isAdmin: true
	}
}

export default AdminUserForm;