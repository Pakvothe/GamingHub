import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addUser, editUser } from '../../redux/actions/users_actions';
import { FormStyled, Btn } from '../styles/styled_global';
import strings from './strings';
import { storage } from '../../firebase/';
import Swal from 'sweetalert2';
import { uuidv4 } from '../../utils/constants';


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
	const [imageAsFile, setImageAsFile] = useState(false);
	const fileInput = useRef(null);

	const handleChange = (ev) => {
		ev.persist()
		setInput(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
	}

	const handleImageAsFile = (e) => {
		const image = e.target.files[0];
		if (!image.type.includes('image')) {
			Swal.fire({
				heightAuto: false,
				title: strings[language].onlyImages,
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
				title: strings[language].imageSize,
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
			let randomID = uuidv4();
			const uploadTask = storage.ref(`/profilePics/${randomID}`).put(imageAsFile)
			uploadTask.on('state_changed',
				(snapShot) => { console.log(snapShot) },
				(err) => { alert('Error en la subida de la imagen') },
				() => {
					storage.ref('profilePics').child(randomID).getDownloadURL()
						.then(fireBaseUrl => {
							dispatch(addUser({ ...input, profile_pic: fireBaseUrl }))
								.then(() => history.push('/'))
								.catch((err) => {
									storage.ref('profilePics').child(randomID).delete();
									setPasswordMessage(false);
									if (err.message === 'email must be unique') setEmailMessage(true);
								});
						});
				});
		} else {
			setPasswordMessage(true);
			setEmailMessage(false);
		};
	};

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
					<span>{strings[language].image}</span>
					<input ref={fileInput} type='file' name='img' onChange={handleImageAsFile} required />
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
				<Btn type="submit" className="btn-ppal">Registrarse</Btn>
			</FormStyled>
		</>
	)
}

export default SignUp