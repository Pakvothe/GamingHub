import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users_actions';
import { FormStyled, Btn, ErrorBubble, Flex } from '../styles/styled_global';
import strings from './strings';
import { storage } from '../../firebase/';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import queryString from 'query-string';
import passwordValidator from '../../utils/passwordValidator';
import { StyledLoader } from './../styles/styled_global';

const SignUp = () => {
	const dispatch = useDispatch()
	const history = useHistory();
	const location = useLocation();
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];
	const order = queryString.parse(location.search).order

	let [input, setInput] = useState({
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		is_admin: false,
	});


	const [error, setError] = useState([]);
	const [loadingUpload, setLoadingUpload] = useState(false);
	let [emailMessage, setEmailMessage] = useState(false);
	const [imageAsFile, setImageAsFile] = useState(false);
	const fileInput = useRef(null);

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
		console.log(input)
		setError(passwordValidator(ev.target.value, language))
	}

	const handleImageAsFile = (e) => {
		const image = e.target.files[0];
		if (!image.type.includes('image')) {
			Swal.fire({
				heightAuto: false,
				title: s.onlyImages,
				icon: 'warning',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok',
			})
			fileInput.current.value = '';
			return;
		}
		if (image.size > 2097152) {
			Swal.fire({
				heightAuto: false,
				title: s.imageSize,
				icon: 'warning',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok',
			})
			fileInput.current.value = '';
			return;
		}
		setImageAsFile(image);
	}

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(input.password)) {
			setLoadingUpload(true);
			let randomID = uuidv4();
			const uploadTask = storage.ref(`/profilePics/${randomID}`).put(imageAsFile)
			uploadTask.on('state_changed',
				(snapShot) => { },
				(err) => { alert(s.imageError) },
				() => {
					storage.ref('profilePics').child(randomID).getDownloadURL()
						.then(fireBaseUrl => {
							dispatch(addUser({ ...input, profile_pic: fireBaseUrl }))
								.then(() => {
									setLoadingUpload(false);
									order ? history.push('/order/payment') : history.push('/')
								})
								.catch((err) => {
									setLoadingUpload(false);
									storage.ref('profilePics').child(randomID).delete();
									if (err.message === 'email must be unique') setEmailMessage(true);
								});
						});
				});
		} else {
			setEmailMessage(false);
		};
	};

	if (loadingUpload) return <StyledLoader
		active={true}
		spinner
		text={s.loading}
		className='loading__overlay'
		classNamePrefix='loading__'
	/>

	return (
		<Flex>
			<FormStyled onSubmit={handleSubmit} autoComplete="off">
				<h1 className='form__title'>{s.signUp}</h1>
				<label>
					<span>{s.name}</span>
					<input type="text" value={input.first_name} name="first_name" onChange={handleChange} required />
				</label>
				<label>
					<span>{s.lastName}</span>
					<input type="text" value={input.last_name} name="last_name" onChange={handleChange} required />
				</label>
				<label>
					<span>{s.image}</span>
					<input ref={fileInput} type='file' name='img' onChange={handleImageAsFile} required />
				</label>
				<label>
					<span>{s.email}</span>
					<input type="email" value={input.email} name="email" onChange={handleChange} required />
				</label>
				{emailMessage && s.inUse}
				<div className="relative mt-2">
					<label>
						<span>{s.password}</span>
						<input type="password" value={input.password} name="password" onChange={handleChange} required />
					</label>
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
				<Btn type="submit" className="btn-ppal">{s.signUp}</Btn>
			</FormStyled>
		</Flex>
	)
}

export default SignUp