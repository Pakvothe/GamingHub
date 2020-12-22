import React, { useState } from 'react';
import Cards from 'react-credit-cards';
//-------> Styles
import { CreditCardStyled } from '../../styles/styled_credit_card';
import { FormStyled, Btn } from '../../styles/styled_global';

const CreditCard = ({ handleSubmit }) => {

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
		const { name, value } = e.target;
		setCredCard({
			...credCard,
			[name]: value
		});
	}

	return (
		<CreditCardStyled>
			<div className='card__container' id='PaymentForm'>
				<FormStyled onSubmit={() => handleSubmit(credCard)}>
					<div className='label__container'>
						<label>
							<span>Card Number</span>
							<input
								type='tel'
								name='number'
								placeholder='XXXX-XXXX-XXXX-XXXX'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='label__container'>
						<label>
							<span>Full Name</span>
							<input
								type='text'
								name='name'
								placeholder='Your Name'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='label__container'>
						<label>
							<span>Expiry Date</span>
							<input
								type='tel'
								name='expiry'
								placeholder='MM/YY'
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
								inputmode='tel'
								name='cvc'
								placeholder='XXX'
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								required
							/>
						</label>
					</div>
					<div className='button__container'>
						<Btn type='submit' className='btn-ppal'>Siguiente</Btn>
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