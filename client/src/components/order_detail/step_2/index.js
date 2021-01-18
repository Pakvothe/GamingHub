import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openLogin } from '../../../redux/actions/global_actions';
import strings from './strings';
//------>Styles
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';
import { Btn, FormStyled } from '../../styles/styled_global';
import { SelectStyled } from '../../styles/styled_catalog';
import { addOrder } from '../../../redux/actions/orders_actions';
import { clearCart } from '../../../redux/actions/cart_actions';
import { scrollToMain } from '../../../utils/scrollIntoView';

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

	useEffect(scrollToMain, [])

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
			total_amount: total * (1 - (discount / 100)),
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

	return (
		<>
			<h2>{s.details}</h2>
			<StyledSVG src={PurchaseStep2} />
			{!user?.first_name ? (
				<StepTwo>
					<div>
						<FormStyled>
							<p className="mb-1">{s.info}</p>
							<label className="mb-2">
								<span>{s.email}:</span>
								<input type="email" onChange={handleChange} />
							</label>
							<div className='payment__container'>
								<p className="payment__text mb-1">{s.paymentTitle}</p>
								<div className='select__container'>
									<SelectStyled onChange={(ev) => handlePayment(ev)}>
										<option value="select" >{s.paymentTitle}</option>
										<option value='mp'>MercadoPago</option>
										<option value='paypal'>Paypal</option>
									</SelectStyled>
									<Btn className={`btn btn-ppal${payment && ' btn-visible'}`} onClick={(ev) => handleClick(ev, true)}>{loading ? <i className="fas fa-circle-notch fa-spin"></i> : s.next}</Btn>
								</div>
							</div>
							<footer className="small-text">{s.warning}</footer>
						</FormStyled>
					</div>
					<aside>
						<h3 className="skinny-title"><span>{s.orLoginHere}</span></h3>
						<div className="button__container">
							<Btn className="btn btn-sec" onClick={openLoginModal}>{s.login}</Btn>
							<Btn className="btn btn-sec"><Link to="/signup?order=true">{s.signUp}</Link></Btn>
						</div>
					</aside>
				</StepTwo>
			) : (
					<StepTwo>
						<div>
							<p className="stepTwo__paragraph">{s.emailParagraph} <span>{user.email}</span></p>
							<div className='payment__container'>
								<p className="payment__text mb-1">{s.paymentTitle}</p>
								<div className='select__container'>
									<SelectStyled onChange={(ev) => handlePayment(ev)}>
										<option value="select" >{s.paymentTitle}</option>
										<option value='mp'>MercadoPago</option>
										<option value='paypal'>Paypal</option>
									</SelectStyled>
									<Btn className={`btn btn-ppal${payment && ' btn-visible'}`} onClick={(ev) => handleClick(ev)}>{loading ? <i className="fas fa-circle-notch fa-spin"></i> : s.next}</Btn>
								</div>
							</div>
							<footer className="small-text">{s.warning}</footer>
						</div>
					</StepTwo>
				)
			}
		</>
	)
}
export default Step2;