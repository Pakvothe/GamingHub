import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import Mini from '../../product_card/mini';
import MemoryGame from './memory';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepOne, GameClose } from '../../styles/styled_order_detail';
import PurchaseStep1 from '../../../assets/img/purchase-steps-1.svg';
import closeCross from '../../../assets/img/close-filled-purple.svg';
import { setDiscount } from '../../../redux/actions/cart_actions';
import strings from './strings';

const Step1 = ({ cart, language }) => {
	const s = strings[language];
	const history = useHistory();
	const dispatch = useDispatch();

	const theme = useSelector(state => state.globalReducer.theme);
	const order = useSelector(state => state.ordersReducer.order.info);

	const [total, setTotal] = useState(0.00);
	const [subtotal, setSubtotal] = useState(0.00);
	const [coupon, setCoupon] = useState(0);

	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(44, 47, 49, 0.95)',
			zIndex: '9999'
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			paddingTop: '2em',
			transform: 'translate(-50%, -50%)',
			border: '2px solid #9b5df7',
			borderRadius: '10px',
			boxShadow: '0 0 5px #9b5df7',
			color: theme === 'dark' ? '#F5F4F8' : '#1B1A1F',
			background: theme === 'dark' ? '#2C2F31' : '#F5F4F8',
			WebkitOverflowScrolling: 'touch',
			zIndex: '9999',
		},
	};

	useEffect(() => {
		if (cart) {
			setSubtotal(cart.reduce((acc, product) => {
				acc = acc + (product.price * product.quantity)
				return acc;
			}, 0.00))
		}
	}, [cart])

	useEffect(() => {
		setTotal((subtotal - (subtotal * (coupon / 100))).toFixed(2))
	}, [subtotal, coupon])

	const handleClick = () => {
		dispatch(setDiscount(coupon));
		history.push('/order/payment')
	}

	const [memory, setMemory] = useState(false);
	const handleGame = (ev) => {
		ev.preventDefault();
		document.body.style.overflow = 'hidden'
		setMemory(true);
	}

	const closeGame = (ev) => {
		ev.preventDefault();
		document.body.style.overflow = 'unset'
		setMemory(false);
	}

	const handleCoupon = (ev) => {
		if (ev.target.value === 'POWERRANGER2021') {
			setCoupon(10)
		}
		else {
			setCoupon(0)
		}
	}

	if (cart.length < 1) {
		return <Redirect to='/' />
	}
	return (
		<>
			{
				<Modal
					isOpen={memory}
					style={customStyles}
					contentLabel={'Login'}
					portalClassName={'ReactModalPortal'}
					ariaHideApp={false}
				>
					<GameClose onClick={closeGame}><StyledSVG src={closeCross} /></GameClose>
					<MemoryGame />
				</Modal>
			}
			<h2>{s.cart}</h2>
			<StyledSVG src={PurchaseStep1} />
			<StepOne>
				<div>
					{cart.map(purchase => {
						return (
							<Mini productDetail={purchase} key={purchase.id} />
						)
					})}
				</div>
				<div>
					<aside>
						<h3>{s.detail}</h3>
						<FormStyled>
							<label>
								<span>{s.discountCoupon}</span>
								<input className={coupon > 0 && 'checked'} type='text' onChange={handleCoupon} />
							</label>
							<Btn className='btn-sec nomeimportanada' onClick={handleGame}>Gana un codigo de descuento</Btn>
						</FormStyled>
						<div className='aside__subtotal'>
							<p>{s.subtotal}</p>
							<p>{subtotal.toFixed(2)}</p>
						</div>
						<div className='aside__discount'>
							<p>{s.discount}</p>
							<p>{coupon}%</p>
						</div>
						<hr />
						<div className='aside__total'>
							<p>{s.total}</p>
							<p>{total}</p>
						</div>
						<Btn className='btn-ppal' onClick={handleClick}>{s.next}</Btn>
					</aside>
				</div>
			</StepOne>
		</>
	)
}

export default Step1;