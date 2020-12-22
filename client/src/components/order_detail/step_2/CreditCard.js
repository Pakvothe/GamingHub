import React, { useState } from 'react';
import Cards from 'react-credit-cards';
//-------> Styles
import { CreditCardStyled } from '../../styles/styled_credit_card';
import { FormStyled } from '../../styles/styled_global';

const CreditCard = () => {

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
			<div className="card__container" id="PaymentForm">

				<FormStyled>
					<div>
						<input
							type="tel"
							name="number"
							placeholder="Card Number"
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
					</div>
					<div>E.g.: 49..., 51..., 36..., 37...</div>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
					</div>
					<div>
						<input
							type="tel"
							name="expiry"
							placeholder="Expiry Date"
							onChange={handleInputChange}
							on
							Focus={handleInputFocus}
						/>
					</div>
					<div>
						<input
							type="tel"
							name="cvc"
							placeholder="CVC"
							onChange={handleInputChange}
							onFocus={handleInputFocus}
						/>
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