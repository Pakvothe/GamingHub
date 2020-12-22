import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { StyledSidebarCart, StyledCloseBtn } from '../styles/styled_sidebar_cart';
import { Btn } from '../styles/styled_global';
import BigCloseButton from '../../assets/img/close-transparent.svg';
import Mini from '../product_card/mini';
import strings from './strings';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cart_actions';

const CartSideBar = ({ language, cart, show, closeCallback }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = '15px';
		}
		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
		};
	}, [show]);

	const [subtotal, setSubtotal] = useState(0.00);
	useEffect(() => {
		if (cart.length > 0) {
			setSubtotal(cart.reduce((acc, product) => {
				acc = acc + (product.price * product.quantity)
				return acc;
			}, 0.00))
		}
	}, [cart])

	return ReactDOM.createPortal(
		<StyledSidebarCart>
			<div className="cart__overlay" style={{ display: show ? 'block' : 'none' }} onClick={closeCallback} />
			<div className='modal' style={{ display: show ? 'block' : 'none' }}>
				<button title='Close' className='modal__close' onClick={closeCallback}>
					<StyledCloseBtn src={BigCloseButton} />
				</button>
				<h2 className='modal__title'>{strings[language].your_cart}</h2>
				{!!cart.length && cart.map(purchase => {
					return (
						<Mini productDetail={purchase} key={purchase.id} />
					)
				})}
				<hr />
				<div className='modal__subtotal'>
					<p>Subtotal:</p>
					<p>${subtotal.toFixed(2)}</p>
				</div>
				<div className="modal__buttons">
					<Link to="/order" onClick={closeCallback}>
						<Btn className='btn btn-ppal'>{strings[language].checkout}</Btn>
					</Link>
					<Btn className='btn btn-sec' onClick={() => dispatch(clearCart())}>{strings[language].empty_cart}</Btn>
				</div>
			</div>
		</StyledSidebarCart>,
		document.getElementById('cartModal')
	);
};

export default CartSideBar;