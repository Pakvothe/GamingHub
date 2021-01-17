import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormStyled, Btn, Flex, Hr, ErrorBubble } from '../../styles/styled_global';
import { editUser, deleteUser } from '../../../redux/actions/users_actions';
import { useHistory } from 'react-router-dom';
import strings from './strings'
import { useToasts } from 'react-toast-notifications';
import Fade from 'react-reveal/Fade';
import swals from '../../../utils/swals';
import { v4 as uuidv4 } from 'uuid';
import { StyledLoader } from './../../styles/styled_global';
import { storage } from '../../../firebase';
import passwordValidator from '../../../utils/passwordValidator';

const EditUser = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
	const user = useSelector((state) => state.usersReducer.user.info);
	const { addToast } = useToasts()
	const [imageAsFile, setImageAsFile] = useState(false);
	const [loadingUpload, setLoadingUpload] = useState(false);
	const fileInput = useRef(null);
	const [error, setError] = useState([]);
	const [emailMessage, setEmailMessage] = useState(false);

	const [input, setInput] = useState({
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
		if (ev.target.name === 'password')
			setError(passwordValidator(ev.target.value, language))
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(input.password) || !input.password) {
			let randomID = uuidv4();
			let profilePic = user.profile_pic;
			if (imageAsFile) {
				swals.FIRE(
					'success',
					s.editq,
					s.editText,
					s.confirmButtonText,
					true,
					s.cancelButtonText
				).then((data) => {
					if (data.isConfirmed) {
						setLoadingUpload(true);
						const uploadTask = storage.ref(`/profilePics/${randomID}`).put(imageAsFile)
						uploadTask.on('state_changed',
							(snapShot) => { },
							(err) => { alert(s.imageError) },
							() => {
								storage.ref('profilePics').child(randomID).getDownloadURL()
									.then(fireBaseUrl => {
										dispatch(editUser({ ...input, profile_pic: fireBaseUrl }))
											.then(status => {
												setLoadingUpload(false);
												switch (status) {
													case 200:
														if (profilePic && profilePic.includes('firebasestorage')) {
															storage.refFromURL(profilePic).delete();
														}
														addToast(s.confirmTitle, { appearance: 'success' });
														history.push('/user')
														break;
													case 409:
														return setEmailMessage(true);
													case 404:
														return addToast(s.toastNotFound, { appearance: 'error' })
													case 500:
													default:
														return addToast(s.toastServerError, { appearance: 'error' })
												}
											})
									});
							})
					}
				})
			} else {
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
								case 409:
									return setEmailMessage(true);
								case 400:
								case 500:
								default:
									addToast(s.deleteUserErrorText, { appearance: 'error' })
									break;
							}
						}
					})
			}
		}
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

	const handleImageAsFile = (e) => {
		if (e.target.files.length === 0) return;
		const image = e.target.files[0];
		if (!image.type.includes('image')) {
			swals.FIRE('warning', s.onlyImages, '', 'Ok', false, '')
			fileInput.current.value = '';
			return;
		}
		if (image.size > 2097152) {
			swals.FIRE('warning', s.imageSize, '', 'Ok', false, '')
			fileInput.current.value = '';
			return;
		}
		setImageAsFile(image);
	}

	if (loadingUpload) return <StyledLoader
		active={true}
		spinner
		text={s.uploading}
		className='loading__overlay'
		classNamePrefix='loading__'
	/>

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
							<span>{s.email}</span>
							<input type="email" value={input.email} name="email" onChange={handleChange} required />
						</label>
						{emailMessage && s.inUse}
						<label>
							<span>{s.profilePic}</span>
							<input ref={fileInput} type='file' name='banner_img' onChange={handleImageAsFile} />
						</label>
						<div className="relative mt-2 mb-2">
							<label>
								<span>{s.password}</span>
								<input type="password" value={input.password} name="password" onChange={handleChange} autoComplete="new-password" />
							</label>
							<div className="small-text small-spacing small-warning">
								<p>{s.passWarning1}</p>
								<p>{s.passWarning2}</p>
							</div>
							{
								error.length > 0 &&
								<ErrorBubble>
									<h4>{s.missing}</h4>
									<ul>
										{
											error.map((err, i) => <li key={i}>{err}</li>)
										}

									</ul>
								</ErrorBubble>
							}
						</div>
						<div className="buttons">
							<Btn type="submit" className="btn-ppal">{s.confirmButtonText}</Btn>
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