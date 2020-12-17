import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom'

import { getUser, editUser, addUser } from '../../../redux/actions/users_actions';

import { Btn } from '../../styles/styled_global'
import { FormStyled, CheckboxLabel } from '../../styles/styled_global'

const AdminUserForm = function () {
	const { id } = useParams();
	const dispatch = useDispatch()
	const user = useSelector(state => state.usersReducer.user.info);

	let [input, setInput] = useState({
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		language: 'es',
		is_admin: false,
	})
	let [toUsers, setToUsers] = useState(false)

	useEffect(() => {
		if (id) dispatch(getUser(id))
	}, [])

	useEffect(() => {
		if (Object.keys(user).length > 0 && id) {
			setInput({
				...user,
				password: ''
			})
		}
	}, [user])


	const handleChange = (ev) => {
		ev.persist()
		if (ev.target.name === 'is_admin') {
			setInput(prevState => ({
				...prevState,
				is_admin: !prevState.is_admin
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
		id ? dispatch(editUser(input)) : dispatch(addUser(input));
		setToUsers(true)
	}

	if (toUsers) return <Redirect to="/admin/users" />

	return (
		<>
			<h1 className="admin-h1">{id ? 'Editar usuario' : 'Agregar usuario'}</h1>
			<FormStyled onSubmit={handleSubmit} autoComplete="off">

				<label>
					<span>Username:</span>
					<input type="text" value={input.username} name="username" onChange={handleChange} />
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
					<input type="text" value={input.first_name} name="first_name" onChange={handleChange} />
				</label>
				<label>
					<span>Apellido:</span>
					<input type="text" value={input.last_name} name="last_name" onChange={handleChange} />
				</label>
				<label className="no-shadow">
					Idioma:
				<select value={input.language} name="language" onChange={handleChange}>
						<option value="es">Español</option>
						<option value="en">Inglés</option>
					</select>
				</label>

				<CheckboxLabel className="no-shadow check" checked={input.is_admin}>
					<input type="checkbox" checked={input.is_admin} value={input.is_admin} name="is_admin" onChange={handleChange} />
					<span className="no-shadow">Admin</span>
				</CheckboxLabel>

				<Btn type="submit" className="btn-ppal">
					{id ? 'Editar usuario' : 'Agregar usuario'}
				</Btn>
			</FormStyled>
		</>
	)
}

export default AdminUserForm;