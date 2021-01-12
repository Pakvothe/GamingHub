import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import CreditCard from '../step_2/CreditCard';
import { addCreditCard, openLogin } from '../../../redux/actions/global_actions';
import strings from './strings';
//------>Styles
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';
import { Btn, Flex, FormStyled } from '../../styles/styled_global';
import { addOrder } from '../../../redux/actions/orders_actions';
import { clearCart } from '../../../redux/actions/cart_actions';


const Step2 = ({ cart, language }) => {

	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector(state => state.usersReducer.user.info)

	const s = strings[language];

	const [total, setTotal] = useState(0);

	const [inputEmail, setInputEmail] = useState('');

	const handleChange = (ev) => {
		setInputEmail(ev.target.value)
	}

	useEffect(() => {
		setTotal(cart.reduce((acc, product) => {
			acc = acc + (product.price * product.quantity)
			return acc;
		}, 0.00));
	}, [])

	const openLoginModal = () => {
		dispatch(openLogin(true))
	}

	const handleClick = (ev, guest) => {
		ev.preventDefault();
		const order = {
			email: guest ? inputEmail : user.email,
			total_amount: total,
			state: "created",
			payment_method: "mp",
			userId: 1,
			products: cart
		}
		console.log(order);
		dispatch(addOrder(order));
		dispatch(clearCart());
		history.push('/');
	}

	if (cart.length < 1) {
		return <Redirect to='/' />
	}

	return (
		<>
			<h2>{s.details}</h2>
			<StyledSVG src={PurchaseStep2} />
			{!user?.first_name ? (
				<>
					<p className="text-center mb-1">Ingresa tu correo para continuar o puedes iniciar sesión.</p>
					<StepTwo>
						<FormStyled>
							<label>
								<span>{s.email}:</span>
								<input type="email" onChange={handleChange} />
							</label>
							<Btn className="btn btn-ppal mb-1" onClick={(ev) => handleClick(ev, true)}>{s.next}</Btn>
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
						<Btn className="btn btn-ppal mb-1" onClick={handleClick}>{s.next}</Btn>
						<p className="text-center">{s.warning}</p>
					</Flex>
				)
			}
		</>
	)
}
export default Step2;