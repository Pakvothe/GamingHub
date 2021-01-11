import React from 'react'
import { Btn, FormStyled } from '../../styles/styled_global'
import { useState } from 'react';
import strings from './strings';
import { ResetStep } from '../../styles/styled_reset';
import passwordValidator from '../../../utils/passwordValidator';

const Reset_steps = ({ handleSubmit, step, language, loading, buttonRef }) => {
	const [input, setInput] = useState('');
	const [error, setError] = useState([]);
	const s = strings[language];

	const handleInputChange = (ev) => {
		let inp = ev.target.value;
		setInput(inp);
		if (step === 3) {
			setError(passwordValidator(inp, language))
		}
	}

	const formSubmit = (ev) => {
		ev.preventDefault();
		error.length === 0 && handleSubmit(input, step);
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
		<ResetStep>
			<p className='reset__description'>{s.description[step]}</p>
			<FormStyled onSubmit={formSubmit}>
				<label>
					<span>{s.label[step]}</span>
					<input type={handleInputType()} value={input} onChange={(ev) => handleInputChange(ev)} />
				</label>
				{
					error.length > 0 &&
					<div className='error-bubble'>
						<h4>{s.missing}</h4>
						{error.map((e, i) => <p key={i}>{'- ' + e}</p>)}
					</div>
				}
				<Btn ref={buttonRef} className='btn btn-ppal' type='submit'>
					{
						loading ? <i className='fas fa-circle-notch fa-spin'></i> :
							s.button[step]
					}
				</Btn>
			</FormStyled>
		</ResetStep>
	)
}

export default Reset_steps
