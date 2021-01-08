import React from 'react'
import { Btn, FormStyled } from '../../styles/styled_global'
import { useState } from 'react';
import strings from './strings';

const Reset_steps = ({ handleSubmit, step, language }) => {
	const [input, setInput] = useState('');

	const formSubmit = (ev) => {
		ev.preventDefault();
		handleSubmit(input, step);
		setInput('');
	}

	const handleInputType = () => {
		switch (step) {
			case 1: return 'email';
			case 2: return 'number';
			case 3: return 'password';
			default: return '';
		}
	}

	return (
		<div>
			<p>{strings[language]?.description[step]}</p>
			<FormStyled onSubmit={formSubmit}>
				<label>
					<span>{strings[language]?.label[step]}</span>
					<input type={handleInputType()} value={input} onChange={(ev) => setInput(ev.target.value)} />
				</label>
				<Btn className='btn btn-ppal' type='submit'>{strings[language]?.button[step]}</Btn>
			</FormStyled>
		</div>
	)
}

export default Reset_steps
