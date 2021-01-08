import axios from 'axios';
import React from 'react'
import Reset_steps from './reset_steps/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const { REACT_APP_API_URL } = process.env;

const Reset = () => {

	const history = useHistory();
	const language = useSelector(state => state.globalReducer.language);
	const [data, setData] = useState({
		email: '',
		reset_code: '',
		step: 1
	})


	const handleSubmits = (input, _step) => {
		switch (_step) {
			case 1:
				axios.post(`${REACT_APP_API_URL}/users/reset/password`, { email: input })
					.then(res => {
						if (res.data.ok) setData({
							...data,
							email: input,
							step: 2
						});
					})
				break;
			case 2:
				axios.post(`${REACT_APP_API_URL}/users/reset/verification`, { email: data.email, reset_code: input.toString(), step: '1' })
					.then(res => {
						if (res.data.ok) setData({
							...data,
							reset_code: input,
							step: 3
						});
					})
				break;
			case 3:
				axios.post(`${REACT_APP_API_URL}/users/reset/verification`, { email: data.email, reset_code: data.reset_code, step: '2', password: input })
					.then(res => {
						if (res.data.ok) {
							alert("PASSWORD CAMBIADA(sweet alert)");
							history.push('/');
						}
					})
				break;
			default:
				break;
		}
	}

	return (
		<>
			<h2>Password Reset</h2>
			<Reset_steps handleSubmit={handleSubmits} step={data.step} language={language} />
		</>
	)
}

export default Reset