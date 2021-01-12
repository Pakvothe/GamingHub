import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormStyled, Btn, Flex, Hr } from '../../styles/styled_global';
import { editUser, deleteUser } from '../../../redux/actions/users_actions';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import strings from './strings'
import { useToasts } from 'react-toast-notifications';
import Fade from 'react-reveal/Fade';
import swals from '../../../utils/swals';

const EditUser = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
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
		swals.FIRE(
			'success',
			s.editq,
			s.editText,
			s.confirmButtonText,
			true,
			s.cancelButtonText,
			() => dispatch(editUser(input))
		)
			.then((data) => {
				if (data.isConfirmed) {
					switch (data.value) {
						case 200:
							swals.CONFIRMOK(
								s.confirmTitle,
								s.confirmText,
								'success',
								history.push('/user')
							)
							break;
						case 400:
						case 500:
						default:
							addToast(s.deleteUserErrorText, { appearance: 'error' })
							break;
					}
				}
			})
	}

	const handleDelete = (ev, id) => {
		swals.FIRE('warning',
			s.deleteAlertTitle,
			s.deleteAlertText,
			s.confirmButtonText,
			true,
			s.cancelButtonText,
			() => dispatch(deleteUser(id)))
			.then((data) => {
				if (data.isConfirmed) {
					switch (data.value) {
						case 200:
							swals.CONFIRMOK(
								s.confirmDeletedUserTitle,
								s.confirmDeletedUserText,
								'success',
								history.push('/')
							)
							break;
						case 500:
						default:
							addToast(s.deleteUserErrorText, { appearance: 'error' })
							break;
					}
				}
			});
	}

	return (
		<Fade>
			<Flex>
				<div>
					<FormStyled onSubmit={handleSubmit} autoComplete="off">
						<h1 className='form__title'>{s.title}</h1>
						<label>
							<span>{s.name}</span>
							<input type="text" value={input.first_name} name="first_name" onChange={handleChange} required />
						</label>
						<label>
							<span>{s.lastName}</span>
							<input type="text" value={input.last_name} name="last_name" onChange={handleChange} required />
						</label>
						<label>
							<span>{s.password}</span>
							<input type="password" value={input.password} name="password" onChange={handleChange} />
						</label>
						<label>
							<span>{s.email}</span>
							<input type="email" value={input.email} name="email" onChange={handleChange} required />
						</label>
						<div className="text-center">
							<Btn type="submit" className="btn-ppal mr-1">{s.confirmButtonText}</Btn>
							<Btn onClick={() => history.push('/user')} className="btn-sec">{s.cancelButtonText}</Btn >
						</div>
					</FormStyled>

					<Hr />
					<section className='text-center'>
						<h3>{s.deleteAccount}</h3>
						<p className='mb-1 mt-1'>{s.deleteAlertText}</p>
						<Btn onClick={(ev) => handleDelete(ev, user.id)} className="btn btn-danger">{s.deleteAccount}</Btn >
					</section>
				</div>
			</Flex>
		</Fade>
	)
}

export default EditUser;