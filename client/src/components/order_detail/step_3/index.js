import React, { useState, useEffect } from 'react';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep3 from '../../../assets/img/purchase-steps-3.svg';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../../redux/actions/orders_actions';
import { clearCart } from '../../../redux/actions/cart_actions';
import strings from './strings';

const Step3 = ({ cart, language }) => {
	const s = strings[language];
	const history = useHistory();
	const dispatch = useDispatch();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(cart.reduce((acc, product) => {
			acc = acc + (product.price * product.quantity)
			return acc;
		}, 0.00));
	}, [])

	const handleClick = () => {
		const order = {
			email: "franfiori29@gmail.com",
			total_amount: total,
			state: "created",
			payment_method: "mp",
			userId: 1,
			products: cart
		}
		dispatch(addOrder(order));
		// dispatch(clearCart());
		// history.push('/');
	};

	return (
		<>
			<h2>{s.details}</h2>
			<StyledSVG src={PurchaseStep3} />
			<StepTwo>
				<div>
					<aside>
						<h3></h3>
						<FormStyled>
							<label>
								<span>{s.discount}</span>
								<input type='text' />
							</label>
						</FormStyled>
						<Btn onClick={handleClick} className='btn-ppal'>{s.buy}</Btn>
					</aside>
				</div>
			</StepTwo>
		</>
	)
}
export default Step3;