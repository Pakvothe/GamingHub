import axios from 'axios';
import React from 'react'
import Reset_steps from './reset_steps/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import strings from './reset_steps/strings';
import { ResetMain } from '../styles/styled_reset';
import swals from './../../utils/swals';
import { useRef } from 'react';
const { REACT_APP_API_URL } = process.env;

const Reset = () => {

	const history = useHistory();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const [data, setData] = useState({
		email: '',
		reset_code: '',
		step: 1
	})
	const [loading, setLoading] = useState(false);
	const buttonRef = useRef(null);

	const fireTick = () => {
		buttonRef.current.classList.add('btn-tick');
		buttonRef.current.addEventListener('animationend', () => {
			buttonRef.current.classList.remove('btn-tick');
		}, { once: true })
	}

	const handleSubmits = (input, _step) => {
		switch (_step) {
			case 1:
				setLoading(true);
				axios.post(`${REACT_APP_API_URL}/users/reset/password`, { email: input })
					.then(res => {
						if (res.data.ok) {
							fireTick()
							setData({
								...data,
								email: input,
								step: 2
							});
						}
					})
					.catch((err) => {
						if (err.response.status === 404) {
							alert('Please enter the email linked to your account');
						} else {
							alert('Oops, something went wrong');
						}
					})
					.finally(() => setLoading(false));
				break;
			case 2:
				setLoading(true);
				axios.post(`${REACT_APP_API_URL}/users/reset/verification`, { email: data.email, reset_code: input.toString(), step: '1' })
					.then(res => {
						if (res.data.ok) {
							fireTick();
							setData({
								...data,
								reset_code: input,
								step: 3
							})
						}
					})
					.catch(() => {
						alert('Oops, something went wrong')
					})
					.finally(() => setLoading(false));
				break;
			case 3:
				setLoading(true);
				axios.post(`${REACT_APP_API_URL}/users/reset/verification`, { email: data.email, reset_code: data.reset_code, step: '2', password: input })
					.then(res => {
						if (res.data.ok) {
							swals.OK(s.alertTitle, s.alertText)
								.finally(() => {
									history.push('/');
								})
						}
					})
					.catch((err) => {
						alert(err);
					})
					.finally(() => setLoading(false));
				break;
			default:
				break;
		}
	}

	return (
		<>
			<ResetMain>
				<h2>{s.title}</h2>
				<Reset_steps handleSubmit={handleSubmits} step={3} language={language} loading={loading} buttonRef={buttonRef} />
			</ResetMain>
		</>
	)
}

export default Reset
