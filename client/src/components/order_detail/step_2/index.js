import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { openLogin } from '../../../redux/actions/global_actions';
import strings from './strings';
//------>Styles
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';
import { Btn, Flex, FormStyled } from '../../styles/styled_global';
import { SelectStyled } from '../../styles/styled_catalog';
import { addOrder } from '../../../redux/actions/orders_actions';
import { clearCart } from '../../../redux/actions/cart_actions';


const Step2 = ({ language }) => {

	const dispatch = useDispatch();
	const user = useSelector(state => state.usersReducer.user.info)
	const { list: cart, discount } = useSelector(state => state.cartReducer.cart);
	const s = strings[language];
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);
	const [inputEmail, setInputEmail] = useState('');
	const [payment, setPayment] = useState(null);

	const handleChange = (ev) => {
		setInputEmail(ev.target.value)
	}

	useEffect(() => {
		setTotal(cart.reduce((acc, product) => {
			acc = acc + (product.price * product.quantity)
			return acc;
		}, 0.00));
	}, [cart])

	const openLoginModal = () => {
		dispatch(openLogin(true))
	}

	const handleClick = (ev, guest) => {
		ev.preventDefault();
		const order = {
			email: guest ? inputEmail : user.email,
			total_amount: total,
			discount,
			state: "created",
			payment_method: payment,
			userId: user?.id ? user.id : 1,
			products: cart,
			language
		}
		setLoading(true);
		dispatch(addOrder(order))
		dispatch(clearCart());
	}

	const handlePayment = (ev) => {
		if (ev.target.value === 'select') return setPayment(null);
		setPayment(ev.target.value);
	}

	// if (cart.length < 1) {
	// 	return <Redirect to='/' />
	// }
	return (
		<>
			<h2>{s.details}</h2>
			<StyledSVG src={PurchaseStep2} />
			{!user?.first_name ? (
				<>
					<p className="text-center mb-1">{s.info}</p>
					<StepTwo>
						<FormStyled>
							<label>
								<span>{s.email}:</span>
								<input type="email" onChange={handleChange} />
							</label>
							<div className='payment__container'>
								<div className='select__container'>
									<h5 >{s.paymentTitle}</h5>
									<SelectStyled onChange={(ev) => handlePayment(ev)}>
										<option value="select" >{s.paymentTitle}</option>
										<option value='mp'>MercadoPago</option>
										<option value='paypal'>Paypal</option>
									</SelectStyled>
								</div>
								{
									payment &&
									<Btn className="btn btn-ppal mb-1" onClick={(ev) => handleClick(ev, true)}>{loading ? <i className="fas fa-circle-notch fa-spin"></i> : s.next}</Btn>
								}
							</div>
						</FormStyled>
						<Flex direction="column" justify="space-evenly">
							<Btn className="btn btn-sec" onClick={openLoginModal}>{s.login}</Btn>
							<Btn className="btn btn-sec"><Link to="/signup?order=true">{s.signUp}</Link></Btn>
						</Flex>
					</StepTwo>
					<p className="text-center">{s.warning}</p>

				</>
			) : (
					<Flex direction="column">
						<p>{s.emailParagraph}</p>
						<h4 className="mb-1">{user.email}</h4>
						<h5>{s.paymentTitle}</h5>
						<SelectStyled className='mt-1 mb-1' onChange={(ev) => handlePayment(ev)}>
							<option value="select" >{s.paymentTitle}</option>
							<option value='mp'>MercadoPago</option>
							<option value='paypal'>Paypal</option>
						</SelectStyled>
						{
							payment &&
							<Btn className="btn btn-ppal mb-1" onClick={handleClick}>{loading ? <i className="fas fa-circle-notch fa-spin"></i> : s.next}</Btn>
						}
						<p className="text-center">{s.warning}</p>
					</Flex>
				)
			}
		</>
	)
}
export default Step2;