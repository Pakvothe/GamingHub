import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormStyled, Btn, Flex, Hr } from '../../styles/styled_global';
import { editUser, deleteUser } from '../../../redux/actions/users_actions';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import strings from './strings'
import { useToasts } from 'react-toast-notifications';

const EditUser = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const language = useSelector((state) => state.globalReducer.language);
	const user = useSelector((state) => state.usersReducer.user.info);
	const { addToast } = useToasts()

	let [input, setInput] = useState({
		id: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
	})

	useEffect(() => {
		if (Object.keys(user).length) {
			setInput(
				{
					id: user.id,
					password: '',
					email: user.email,
					first_name: user.first_name,
					last_name: user.last_name,
				}
			)
		}
	}, [user])

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))

	}

	const handleSubmit = (ev) => {
		ev.preventDefault();

		Swal.fire({
			heightAuto: false,
			title: strings[language].editq,
			text: strings[language].editText,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok',
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(editUser(input));
				Swal.fire(
					strings[language].confirmTitle,
					strings[language].confirmText,
					'success',
					history.push('/user')
				)
			}
		})

		//Falta manejar el error
	}

	const handleDelete = (ev, id) => {
		Swal.fire({
			heightAuto: false,
			title: strings[language].deleteAlertTitle,
			text: strings[language].deleteAlertText,
			icon: 'error',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			showLoaderOnConfirm: true,
			confirmButtonText: 'Ok',
			preConfirm: () => dispatch(deleteUser(id)),
		}).then((data) => {
			if (data.isConfirmed) {
				if (data.value.type === 'success') {
					Swal.fire(
						strings[language].confirmDeletedUserTitle,
						strings[language].confirmDeletedUserText,
						'success',
						history.push('/')
					)
				} else {
					addToast(strings[language].deleteUserErrorText, { appearance: 'error' })
				}
			}
		});
	}

	return (
		<Flex>
			<div>
				<FormStyled onSubmit={handleSubmit} autoComplete="off">
					<h1 className='form__title'>{strings[language].title}</h1>
					<label>
						<span>{strings[language].name}</span>
						<input type="text" value={input.first_name} name="first_name" onChange={handleChange} required />
					</label>
					<label>
						<span>{strings[language].lastName}</span>
						<input type="text" value={input.last_name} name="last_name" onChange={handleChange} required />
					</label>
					<label>
						<span>{strings[language].password}</span>
						<input type="password" value={input.password} name="password" onChange={handleChange} />
					</label>
					<label>
						<span>{strings[language].email}</span>
						<input type="email" value={input.email} name="email" onChange={handleChange} required />
					</label>
					<div className="text-center">
						<Btn type="submit" className="btn-ppal mr-1">{strings[language].button}</Btn>
						<Btn onClick={() => history.push('/user')} className="btn-sec">{strings[language].button2}</Btn >
					</div>
				</FormStyled>

				<Hr />
				<section>
					<h3>{strings[language].deleteAccount}</h3>
					<p>strings[language].deleteAlertText</p>
					<Btn onClick={(ev) => handleDelete(ev, user.id)} className="btn btn-danger">{strings[language].deleteAccount}</Btn >
				</section>
			</div>
		</Flex>
	)
}

export default EditUser;