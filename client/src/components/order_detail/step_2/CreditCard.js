import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import strings from './strings';
//-------> Styles
import { CreditCardStyled } from '../../styles/styled_credit_card';
import { FormStyled, Btn } from '../../styles/styled_global';

const CreditCard = ({ handleSubmit, language }) => {

	const [credCard, setCredCard] = useState({
		cvc: '',
		expiry: '',
		focus: '',
		name: '',
		number: '',
	});

	const handleInputFocus = (e) => {
		setCredCard({
			...credCard,
			focus: e.target.name
		});
	}

	const handleInputChange = (e) => {
		let { name, value } = e.target;
		if (name === 'cvc') {
			value = value.replace(/[^0-9.]/g, '').substring(0, 3);
		}
		if (name === 'number') {
			value = value.substring(0, 16);
		}
		if (name === 'expiry') {
			value = value.substring(0, 4);
		}
		if (name === 'name') {
			value = value.replace(/[0-9.]/g, '')
		}
		setCredCard({
			...credCard,
			[name]: value
		});
	}

	return (
		<CreditCardStyled>
			<div className='card__container' id='PaymentForm'>
				<FormStyled onSubmit={(e) => handleSubmit(e, credCard)}>
					<div className='label__container'>
						<label>
							<span>{strings[language].cardNumber}</span>
							<input
								type='number'
								name='number'
								value={credCard.number}
								placeholder='XXXX-XXXX-XXXX-XXXX'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='label__container'>
						<label>
							<span>{strings[language].name}</span>
							<input
								type='text'
								name='name'
								value={credCard.name}
								placeholder='Your Name'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='label__container'>
						<label>
							<span>{strings[language].expiry}</span>
							<input
								type='number'
								name='expiry'
								value={credCard.expiry}
								placeholder='MMYY'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='label__container'>
						<label>
							<span>CVC</span>
							<input
								type='password'
								name='cvc'
								value={credCard.cvc}
								placeholder='XXX'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='button__container'>
						<Btn type='submit' className='btn-ppal'>{strings[language].next}</Btn>
					</div>
				</FormStyled>
				<Cards
					cvc={credCard.cvc}
					expiry={credCard.expiry}
					focused={credCard.focus}
					name={credCard.name}
					number={credCard.number}
				/>
			</div>
		</CreditCardStyled>
	);
}
export default CreditCard;